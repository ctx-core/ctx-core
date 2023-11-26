/** @typedef {import('./index.d.ts').rmemo_def_T} */
/** @typedef {import('./index.d.ts').memo_T} */
/** @typedef {import('./index.d.ts').rmemo_subscriber_T} */
/** @typedef {import('./index.d.ts').sig_T} */
/** @type {WeakRef<memo_T>} */
let cur_memo
/** @type {Set<()=>unknown>} */
let queue = new Set
/**
 * @param {rmemo_def_T}rmemo_def
 * @param {rmemo_subscriber_T<unknown>[]}subscriber_a
 * @returns {memo_T}
 * @private
 */
export function memo_(rmemo_def, ...subscriber_a) {
	let memor
	let memo = ()=>{
		if (!('val' in memo)) {
			memo.f()
		}
		if (cur_memo) {
			if (!~memor.indexOf(cur_memo.r ||= new WeakRef(cur_memo.f))) memor.push(cur_memo.r)
			if (cur_memo.f.l < memo.f.l + 1) cur_memo.f.l = memo.f.l + 1
			// conditional in r calls this r_memo
			cur_memo.f.s.push(memo)
			// prevent this rmemo from GC while cur_memo is still active
			if (!~cur_memo.f.S.indexOf(memo)) cur_memo.f.S.push(memo)
		}
		return memo.val
	}
	Object.defineProperty(memo, '_', {
		get: memo,
		set: val=>{
			let i = memo.val
			memo.val = val
			if (i !== val) {
				// val is available for other purposes
				let run_queue = !queue.size
				i = 0
				for (let r of memor) {
					val = r.deref() // val is no longer used...saving bytes
					if (!val) {
						memor.splice(i, 1)
					} else if (~val.s.indexOf(memo)) { // if conditional r refresh calls this r_memo, add to queue
						queue.add(val)
					}
					i++
				}
				// add reference to subscribers to prevent GC
				memo.b ||=
					subscriber_a.map(subscriber=>
						memo_(subscriber$=>(
							subscriber(memo),
							subscriber$
						))())
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
			}
		},
	})
	memo.f = ()=>{
		let prev_memo = cur_memo
		cur_memo = memo
		memo.f.s = []
		try {
			memo._ = rmemo_def(memo)
		} catch (err) {
			console.error(err)
		}
		cur_memo = prev_memo // finally is not necessary...catch does not throw
	}
	memo.f.l = 0
	memo.f.s = []
	memo.f.S = []
	memo.memor = memor = []
	return memo
}
export { memo_ as memosig_ }
/**
 * @param {unknown}init_val
 * @param {rmemo_subscriber_T[]}subscriber_a
 * @returns {sig_T}
 * @private
 */
export function sig_(init_val, ...subscriber_a) {
	return memo_(sig=>
		'val' in sig
			? sig.val
			: init_val,
	...subscriber_a)
}
