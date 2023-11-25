/** @typedef {import('./index.d.ts').rmemo_def_T} */
/** @typedef {import('./index.d.ts').memo_T} */
/** @typedef {import('./index.d.ts').rmemo_subscriber_T} */
/** @type {WeakRef<memo_T>} */
let cur_rmr
/** @type {Set<()=>unknown>} */
let queue = new Set
/**
 * @param {rmemo_def_T}rmemo_def
 * @param {rmemo_subscriber_T<unknown>[]}subscriber_a
 * @returns {memo_T}
 * @private
 */
export function memo_(rmemo_def, ...subscriber_a) {
	let refresh
	let rmrs
	let memo = (...arg_a)=>{
		if (arg_a.length) {
			let val = arg_a[0]
			if (val !== memo.val) {
				memo.val = val // val is available for other purposes
				let run_queue = !queue.size
				for (let rmr of rmrs) {
					val = rmr.deref() // val is no longer used...saving bytes
					if (!val) {
						rmrs.delete(rmr)
					} else if (val.s.has(memo)) { // if conditional rmr refresh calls this r_memo, add to queue
						queue.add(val)
					}
				}
				// add reference to subscribers to prevent GC
				memo._s ||=
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
		} else {
			if (!('val' in memo)) {
				refresh()
			}
			if (cur_rmr) {
				let cur_rmr_refresh = cur_rmr.deref()
				cur_rmr_refresh.l =
					cur_rmr_refresh.l < refresh.l + 1
						? refresh.l + 1
						: cur_rmr_refresh.l
				rmrs.add(cur_rmr)
				cur_rmr_refresh.s.add(memo) // conditional in rmr calls this r_memo
				cur_rmr_refresh.S.add(memo) // prevent this rmemo from GC while cur_rmr is still active
			}
		}
		return memo.val
	}
	refresh = ()=>{
		let prev_rmr = cur_rmr
		cur_rmr = memo.rmr
		refresh.s.clear()
		try {
			memo(rmemo_def(memo))
		} catch (err) {
			console.error(err)
		}
		cur_rmr = prev_rmr // finally is not necessary due since catch does not throw
	}
	refresh.l = 0
	// rmrs = new Set
	// memo.rmrs is kept for GC testing/debugging purposes...small size increase
	memo.rmrs = rmrs = new Set
	memo.rmr = new WeakRef(refresh)
	refresh.s = new Set
	refresh.S = new Set
	return memo
}
export { memo_ as memosig_ }
export function pmemo_(...arg_a) {
	return prop__mixin(memo_(...arg_a))
}
export { pmemo_ as pmemosig_ }
/**
 * @param {unknown}init_val
 * @param {rmemo_subscriber_T[]}subscriber_a
 * @returns {memo_T}
 * @private
 */
export function sig_(init_val, ...subscriber_a) {
	return memo_(rw_rmemo=>
		'val' in rw_rmemo
			? rw_rmemo.val
			: init_val,
	...subscriber_a)
}
export function psig_(...arg_a) {
	return prop__mixin(sig_(...arg_a))
}
function prop__mixin(memo) {
	Object.defineProperty(memo, '_', {
		get: ()=>memo(),
		set: val=>{
			memo(val)
		},
	})
	return memo
}
