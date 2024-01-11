/// <reference types="./index.d.ts" />
/** @type {memo_T} */
let cur_memo
/** @type {Set<(()=>unknown)&{ l:number }>} */
let queue = new Set
/**
 * @param {memo_def_T}memo_def
 * @param {rmemo_add_def_T}add_def_a
 * @returns {memo_T}
 * @private
 */
export function memo_(memo_def, ...add_def_a) {
	/** @type {memo_T} */
	let memo = ()=>{
		if (!('val' in memo)) {
			memo.f()
		}
		if (cur_memo) {
			if (!memo.t.includes(
				cur_memo.s ||= new WeakRef(cur_memo.f)
			)) {
				memo.t.push(cur_memo.s)
			}
			if (cur_memo.f.l < memo.f.l + 1) cur_memo.f.l = memo.f.l + 1
			// memo is called by cur_memo's conditional execution...next change to memo will notify cur_memo
			cur_memo.f.s.push(memo)
			// prevent memo from GC while cur_memo still has a strong reference
			if (!cur_memo.f.t.includes(memo)) cur_memo.f.t.push(memo)
		}
		return memo.val
	}
	Object.defineProperty(memo, '_', {
		get: memo,
		set: val=>{
			if (memo.val !== val) {
				memo.t = memo.t.filter(r=>{
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
	/**
	 * @param {rmemo_add_def_T}add_def
	 * @returns {memo_T}
	 */
	memo.add = add_def=>{
		if (memo.a) {
			let v = add_def(memo)
			if (v instanceof Object) {
				memo.a.push(v)
				if (v.memo_) v()
			}
		} else {
			add_def_a.push(add_def)
		}
		return memo
	}
	memo.memo_ = memo_
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
	memo.f.t = []
	memo.t = []
	return memo
}
export { memo_ as memosig_ }
/**
 * @param {memo_def_T}memo_def
 * @param {rmemo_add_def_T}add_def_a
 * @returns {sig_T}
 * @private
 */
export function lock_memosig_(memo_def, ...add_def_a) {
	let lock_memosig = new Proxy(
		/** @type {sig_T} */
		memo_(memo=>
			memo.lock ? memo() : memo_def(memo),
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
 * @param {rmemo_add_def_T}add_def_a
 * @returns {sig_T}
 * @private
 */
export function sig_(init_val, ...add_def_a) {
	return memo_(sig=>
		'val' in sig
			? sig.val
			: init_val,
	...add_def_a)
}
/**
 * Call the rmemo & enable updates from it's parents.
 * @param {rmemo_T}rmemo
 * @param {(rmemo:rmemo_T)=>unknown}[off_fn]
 * @returns {rmemo_T}
 */
export function rmemo__on(rmemo, off_fn) {
	if (off_fn) rmemo__off__add(rmemo, off_fn)
	if (rmemo.s?.d) {
		rmemo.s.deref = rmemo.s.d
	}
	rmemo.f()
	return rmemo
}
/**
 * Disable updates from the rmemo's parents.
 * @param {rmemo_T}rmemo
 * @returns {rmemo_T}
 */
export function rmemo__off(rmemo) {
	if (rmemo.s) {
		rmemo.s.d ??= rmemo.s.deref
		rmemo.s.deref = ()=>{
		}
	}
	for (let a_o of rmemo.a ?? []) {
		if (a_o.memo_) rmemo__off(a_o)
	}
	for (let fn of rmemo.o ?? []) {
		fn(rmemo)
	}
	return rmemo
}
/**
 * @param {rmemo_T}rmemo
 * @param {(rmemo:rmemo_T)=>unknown}off_fn
 * @returns {rmemo_T}
 */
export function rmemo__off__add(rmemo, off_fn) {
	rmemo.o ??= []
	rmemo.o.push(off_fn)
	return rmemo
}
/**
 * Bind reactive add_def onto the given memo to prevent GC.
 * The add_def can autosubscribe to any rmemo.
 * Returns an "off" function which deactivates the reactive add_def & removes the GC binding from the given memo.
 * @param {rmemo_T}memo
 * @param {rmemo_add_def_T}add_def
 * @returns {()=>void}
 */
export function rmemo__add(memo, add_def) {
	let val
	memo.add((...arg_a)=>{
		return val = add_def(...arg_a)
	})
	return ()=>{
		if (val.memo_) rmemo__off(val)
		if (val instanceof Object) memo.a.splice(memo.a.indexOf(val), 1)
	}
}
