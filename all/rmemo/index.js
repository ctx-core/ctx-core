/** @typedef {import('./index.d.ts').rmemo_def_T} */
/** @typedef {import('./index.d.ts').r_rmemo_T} */
/** @typedef {import('./index.d.ts').rmemo_subscriber_T} */
/** @type {WeakRef<r_rmemo_T>} */
let cur_rmr
/** @type {Set<()=>unknown>} */
let queue = new Set
/**
 * @param {rmemo_def_T}rmemo_def
 * @param {rmemo_subscriber_T<unknown>[]}subscriber_a
 * @returns {r_rmemo_T}
 * @private
 */
export function r_rmemo_(rmemo_def, ...subscriber_a) {
	let refresh
	let rmrs
	let r_rmemo = {
		get _() {
			if (!('val' in r_rmemo)) {
				refresh()
			}
			if (cur_rmr) {
				let cur_rmr_refresh = cur_rmr.deref()
				cur_rmr_refresh.l =
					cur_rmr_refresh.l < refresh.l + 1
						? refresh.l + 1
						: cur_rmr_refresh.l
				rmrs.add(cur_rmr)
				cur_rmr_refresh.s.add(r_rmemo) // conditional in rmr calls this r_memo
				cur_rmr_refresh.S.add(r_rmemo) // prevent this rmemo from GC while cur_rmr is still active
			}
			return r_rmemo.val
		},
		set _(val) {
			if (val !== r_rmemo.val) {
				r_rmemo.val = val // val is available for other purposes
				let run_queue = !queue.size
				for (let rmr of rmrs) {
					val = rmr.deref() // val is no longer used...saving bytes
					if (!val) {
						rmrs.delete(rmr)
					} else if (val.s.has(r_rmemo)) { // if conditional rmr refresh calls this r_memo, add to queue
						queue.add(val)
					}
				}
				// add reference to subscribers to prevent GC
				r_rmemo._s ||=
					subscriber_a.map(subscriber=>
						r_rmemo_(subscriber$=>(
							subscriber(r_rmemo),
							subscriber$
						))._)
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
	}
	refresh = ()=>{
		let prev_rmr = cur_rmr
		cur_rmr = r_rmemo.rmr
		refresh.s.clear()
		try {
			r_rmemo._ = rmemo_def(r_rmemo)
		} catch (err) {
			console.error(err)
		}
		cur_rmr = prev_rmr // finally is not necessary due since catch does not throw
	}
	refresh.l = 0
	rmrs = new Set
	r_rmemo.rmr = new WeakRef(refresh)
	refresh.s = new Set
	refresh.S = new Set
	return r_rmemo
}
export { r_rmemo_ as rwr_rmemo_ }
/**
 * @param {unknown}init_val
 * @param {rmemo_subscriber_T[]}subscriber_a
 * @returns {r_rmemo_T}
 * @private
 */
export function rw_rmemo_(init_val, ...subscriber_a) {
	return r_rmemo_(rw_rmemo=>
		'val' in rw_rmemo
			? rw_rmemo.val
			: init_val,
	...subscriber_a)
}
/**
 * @param {rw_rmemo_T}rw_rmemo
 * @returns {(val:unknown)=>unknown}
 * @private
 */
export function rw_rmemo__set_(rw_rmemo) {
	return val=>rw_rmemo._ = val
}
