/// <reference types="./index.d.ts" />
/** @type {WeakRef<memo_T>} */
let cur_memo
/** @type {Set<()=>unknown>} */
let queue = new Set
/**
 * @param {rmemo_def_T}memo_def
 * @param {rmemo_subscriber_T<unknown>[]}subscriber_a
 * @returns {memo_T}
 * @private
 */
export function memo_(memo_def, ...subscriber_a) {
	let memo = ()=>{
		if (!('val' in memo)) {
			memo.f()
		}
		if (cur_memo) {
			if (!memo.memor.includes(cur_memo.r ||= new WeakRef(cur_memo.f))) memo.memor.push(cur_memo.r)
			if (cur_memo.f.l < memo.f.l + 1) cur_memo.f.l = memo.f.l + 1
			// conditional in r calls this r_memo
			cur_memo.f.s.push(memo)
			// prevent this rmemo from GC while cur_memo is still active
			if (!cur_memo.f.S.includes(memo)) cur_memo.f.S.push(memo)
		}
		return memo.val
	}
	Object.defineProperty(memo, '_', {
		get: memo,
		set: val=>{
			let run_queue
			if (memo.val !== val) {
				run_queue = !queue.size
				memo.memor = memo.memor.filter(r=>{
					r = r.deref()
					if (r && r.s.includes(memo)) { // if conditional r refresh calls this r_memo, add to queue
						queue.add(r)
					}
					return r
				})
			}
			memo.val = val
			if (!memo.b) {
				// add reference to subscribers to prevent GC
				memo.b = subscriber_a.map(subscriber=>
					memo_(()=>subscriber(memo)))
				for (let s of memo.b) {
					s()
				}
			}
			if (run_queue) {
				cur_refresh_loop:for (let cur_refresh of queue) {
					queue.delete(cur_refresh)
					for (let queue_refresh of queue) {
						if (cur_refresh.l > queue_refresh.l) {
							queue.add(cur_refresh)
							continue cur_refresh_loop
						}
					}
					cur_refresh()
				}
			}
		},
	})
	memo.f = ()=>{
		let prev_memo = cur_memo
		cur_memo = memo
		memo.f.s = []
		try {
			memo._ = memo_def(memo)
		} catch (err) {
			console.error(err)
		}
		cur_memo = prev_memo // finally is not necessary...catch does not throw
	}
	memo.f.l = 0
	memo.f.s = []
	memo.f.S = []
	memo.memor = []
	return memo
}
export { memo_ as memosig_ }
/**
 * @param {rmemo_def_T}memo_def
 * @param {rmemo_subscriber_T<unknown>[]}subscriber_a
 * @returns {sig_T}
 * @private
 */
export function lock_memosig_(memo_def, ...subscriber_a) {
	return new Proxy(
		/** @type {sig_T} */memo_(memo=>
			memo.lock ? memo._ : memo_def(memo),
		...subscriber_a),
		{
			set(memo, prop, val) {
				if (prop === '_') {
					memo.lock = 1
					memo._ = val
				}
				return 1
			}
		})
}
/**
 * @param {unknown}init_val
 * @param {rmemo_subscriber_T[]}subscriber_a
 * @returns {sig_T}
 * @private
 */
export function sig_(init_val, ...subscriber_a) {
	return memo_(sig=>{
		return 'val' in sig
			? sig.val
			: init_val
	},
	...subscriber_a)
}
/**
 * Call the rmemo & enable updates from it's parents.
 * @param {rmemo_T}rmemo
 */
export function on(rmemo) {
	if (rmemo.r?.d) {
		rmemo.r.deref = rmemo.r.d
	}
	rmemo.f()
}
/**
 * Disable updates from the rmemo's parents.
 * @param {rmemo_T}rmemo
 */
export function off(rmemo) {
	if (rmemo.r) {
		rmemo.r.d ||= rmemo.r.deref
		rmemo.r.deref = ()=>{
		}
	}
}
