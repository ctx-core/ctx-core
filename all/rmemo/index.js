/// <reference types="./index.d.ts" />
/** @type {WeakRef<memo_T>} */
let cur_memo
/** @type {Set<()=>unknown>} */
let queue = new Set
/**
 * @param {memo_def_T}memo_def
 * @param {rmemo_add_T<unknown>[]}add_def_a
 * @returns {memo_T}
 * @private
 */
export function memo_(memo_def, ...add_def_a) {
	let memo = ()=>{
		if (!('val' in memo)) {
			memo.f()
		}
		if (cur_memo) {
			if (!memo.memor.includes(cur_memo.r ||= new WeakRef(cur_memo.f))) memo.memor.push(cur_memo.r)
			if (cur_memo.f.l < memo.f.l + 1) cur_memo.f.l = memo.f.l + 1
			// memo is called by cur_memo's conditional execution...next change to memo will notify cur_memo
			cur_memo.f.s.push(memo)
			// prevent memo from GC while cur_memo still has a strong reference
			if (!cur_memo.f.S.includes(memo)) cur_memo.f.S.push(memo)
		}
		return memo.val
	}
	Object.defineProperty(memo, '_', {
		get: memo,
		set: val=>{
			if (memo.val !== val) {
				memo.memor = memo.memor.filter(r=>{
					r = r.deref()
					if (r && r.s.includes(memo)) { // if added by cur_memo.f.s.push(memo), add to queue
						queue.add(r)
					}
					return r
				})
			}
			memo.val = val
			if (!memo.a) {
				memo.a = []
				add_def_a.map(memo.add)
			}
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
		},
	})
	memo.add = add_def=>{
		if (memo.a) {
			let pair = [memo_(()=>pair[1] = add_def(memo, pair[1]))]
			memo.a.push(pair)
			pair[0]()
		} else {
			add_def_a.push(add_def)
		}
		return memo
	}
	memo.f = ()=>{
		let prev_memo = cur_memo
		cur_memo = memo
		memo.f.s = [] // reset references in memo_def conditional execution path...see cur_memo.f.s.push(memo)
		try {
			memo._ = memo_def(memo)
		} catch (err) {
			console.error(err)
		}
		cur_memo = prev_memo // catch does not throw
	}
	memo.f.l = 0
	memo.f.s = []
	memo.f.S = []
	memo.memor = []
	return memo
}
export { memo_ as memosig_ }
/**
 * @param {memo_def_T}memo_def
 * @param {rmemo_add_T<unknown>[]}add_def_a
 * @returns {sig_T}
 * @private
 */
export function lock_memosig_(memo_def, ...add_def_a) {
	let lock_memosig = new Proxy(
		/** @type {sig_T} */memo_(memo=>
			memo.lock ? memo._ : memo_def(memo),
		...add_def_a),
		{
			get(memo, prop) {
				if (prop === 'add') {
					return (...arg_a)=>{
						memo[prop](...arg_a)
						return lock_memosig
					}
				}
				return memo[prop]
			},
			set(memo, prop, val) {
				if (prop === '_') {
					memo.lock = 1
					memo._ = val
				}
				return 1
			}
		})
	return lock_memosig
}
/**
 * @param {unknown}init_val
 * @param {rmemo_add_T[]}add_a
 * @returns {sig_T}
 * @private
 */
export function sig_(init_val, ...add_a) {
	return memo_(sig=>
		'val' in sig
			? sig.val
			: init_val,
	...add_a)
}
/**
 * Call the rmemo & enable updates from it's parents.
 * @param {rmemo_T}rmemo
 */
export function rmemo__on(rmemo) {
	if (rmemo.r?.d) {
		rmemo.r.deref = rmemo.r.d
	}
	rmemo.f()
}
/**
 * Disable updates from the rmemo's parents.
 * @param {rmemo_T}rmemo
 */
export function rmemo__off(rmemo) {
	if (rmemo.r) {
		rmemo.r.d ||= rmemo.r.deref
		rmemo.r.deref = ()=>{
		}
	}
}
/**
 * Bind reactive add_def onto the given memo to prevent GC.
 * The add_def can autosubscribe to any rmemo.
 * Returns an "off" function which deactivates the reactive add_def & removes the GC binding from the given memo.
 * @param {rmemo_T}memo
 * @param {()=>unknown}add_def
 * @returns {()=>void}
 */
export function rmemo__add(memo, add_def) {
	let pair
	memo.add(()=>{
		pair = memo.a[memo.a.length - 1]
		return add_def(memo)
	})
	return ()=>{
		rmemo__off(pair[0])
		memo.a.splice(memo.a.indexOf(pair), 1)
	}
}
