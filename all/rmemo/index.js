/// <reference types="./index.d.ts" />
/**
 * @type {{ c?:memo_T, q:Set<memo_T> }}
 * $.c child memo calling the memo
 * $.q queue
 */
let $ = globalThis.__rmemo__ ??= { q: new Set }
/**
 * @param {memo_def_T}memo_def
 * @param {rmemo_add_def_T[]}add_def_a1
 * @returns {memo_T}
 * @private
 */
export function memo_(memo_def, add_def_a1) {
	let wr_a1 = []
	/** @type {memo_T} */
	let memo = (...val_a1)=>{
		if (val_a1.length) {
			if (memo.val !== val_a1[0]) {
				wr_a1 = wr_a1.filter(r=>{
					r = r.deref()
					if (r?.r.includes(memo)) { // if added by $.c.r.push(memo), add to $.q
						$.q.add(r)
					}
					return r
				})
			}
			memo.val = val_a1[0]
			if (!memo.a) {
				memo.a = []
				add_def_a1.map(add_def=>{
					let v = add_def(memo)
					if (v instanceof Object) {
						memo.a.push(v)
						if (v.memo_) v()
					}
				})
			}
			cur_refresh_loop:for (let cur_memo of $.q) {
				$.q.delete(cur_memo)
				for (let queue_refresh of $.q) {
					if (cur_memo.l > queue_refresh.l) {
						$.q.add(cur_memo)
						continue cur_refresh_loop
					}
				}
				memo__run(cur_memo)
			}
		} else {
			'val' in memo || memo__run(memo)
			if ($.c) {
				if (!wr_a1.includes($.c.s ??= new WeakRef($.c))) {
					wr_a1.push($.c.s)
				}
				if ($.c.l < memo.l + 1) $.c.l = memo.l + 1
				// memo is called by $.c's conditional execution...next change to memo will notify $.c
				$.c.r.push(memo)
				// prevent memo from GC while $.c still has a strong reference
				if (!$.c.t.includes(memo)) $.c.t.push(memo)
			}
		}
		return memo.val
	}
	memo.l = 0
	memo.r = []
	memo.t = []
	memo.b = add_def_a1 ??= []
	memo.d = memo_def
	memo.memo_ = memo_
	return memo
}
export { memo_ as memosig_ }
/**
 * @param {unknown}init_val
 * @param {rmemo_add_def_T[]}add_def_a
 * @returns {sig_T}
 * @private
 */
export function sig_(init_val, add_def_a) {
	return memo_(sig=>
		'val' in sig
			? sig.val
			: init_val,
	add_def_a)
}
/**
 * @param {memo_def_T}memo_def
 * @param {rmemo_add_def_T[]}add_def_a
 * @returns {sig_T}
 * @private
 */
export function lock_memosig_(memo_def, add_def_a) {
	let memo = memo_(memo=>
		memo.lock ? memo() : memo_def(memo),
	add_def_a)
	let lock_memosig = new Proxy(
		/** @type {sig_T} */
		(...val_a1)=>{
			if (val_a1.length) {
				memo.lock = 1
			}
			return memo(...val_a1)
		},
		{
			get(_lock_memosig, prop) {
				return memo[prop]
			},
			set(lock_memosig, prop, val) {
				memo[prop] = val
				return 1
			}
		})
	return lock_memosig
}
/**
 * @param {(...arg_a:unknown[])=>unknown}fn
 * @returns {((...arg_a:unknown[])=>unknown)&{ memo_: typeof memo_ }}
 * @private
 */
export function memo__bind(fn) {
	fn.memo_ = memo_
	return fn
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
	memo__run(rmemo)
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
	if (memo.a) {
		val = add_def(memo)
		if (val instanceof Object) {
			memo.a.push(val)
			if (val.memo_) val()
		}
	} else {
		memo.b.push(()=>{
			val = add_def(memo)
			if (val instanceof Object) {
				memo.a.push(val)
				if (val.memo_) val()
			}
		})
	}
	return ()=>{
		if (val?.memo_) rmemo__off(val)
		if (val instanceof Object) memo.a.splice(memo.a.indexOf(val), 1)
	}
}
/**
 * @param {rmemo_T}rmemo
 */
export function rmemo__unset(rmemo) {
	delete rmemo.val
}
function memo__run(memo) {
	let prev_memo = $.c
	$.c = memo
	memo.r = [] // reset references in memo_def conditional execution path...see $.c.r.push(memo)
	try {
		memo(memo.d(memo))
	} catch (err) {
		console.error(err)
	}
	$.c = prev_memo // catch does not throw
}
