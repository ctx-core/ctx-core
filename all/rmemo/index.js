/** @typedef {import('./index.d.ts').rmemo_def_T} */
/** @typedef {import('./index.d.ts').r_rmemo_T} */
/** @typedef {import('./index.d.ts').rmemo_subscriber_T} */
/** @type {WeakRef<r_rmemo_T>} */
let cur_rmr
/** @type {(()=>unknown)[]} */
let queue = []
/**
 * @param {rmemo_def_T}rmemo_def
 * @param {rmemo_subscriber_T<unknown>[]}subscriber_a
 * @returns {r_rmemo_T}
 * @private
 */
export function r_rmemo_(rmemo_def, ...subscriber_a) {
	let refresh
	let r_rmemo = {
		get _() {
			if (!('val' in r_rmemo)) {
				refresh()
			}
			if (cur_rmr) {
				cur_rmr.l =
					cur_rmr.l < r_rmemo.rmr.l + 1
						? r_rmemo.rmr.l + 1
						: cur_rmr.l
				r_rmemo.rmrs ||= new Set
				r_rmemo.rmrs.add(cur_rmr)
				cur_rmr.f.push(r_rmemo) // conditional in rmr calls this r_memo
			}
			return r_rmemo.val
		},
		set _(val) {
			if (val !== r_rmemo.val) {
				r_rmemo.val = val
				let run_queue = !queue[0]
				for (let rmr of (r_rmemo.rmrs ||= new Set)) {
					if (
						~rmr.f.indexOf(r_rmemo) // if conditional in rmr calls this r_memo, add to queue
						&& !~queue.indexOf(rmr) // do not add multiple times to queue
					) {
						queue.push(rmr)
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
					// eslint-disable-next-line no-cond-assign
					for (let rmr; rmr = queue.shift();) {
						if (queue.some(queue_r=>rmr.l > queue_r.l)) {
							queue.push(rmr)
						} else {
							(/* refresh */rmr.deref() || r_rmemo.rmrs.delete)(rmr)
						}
					}
				}
			}
		},
	}
	refresh = ()=>{
		let prev_rmr = cur_rmr
		cur_rmr = r_rmemo.rmr
		cur_rmr.f = []
		try {
			r_rmemo._ = rmemo_def(r_rmemo)
		} catch (err) {
			console.error(err)
		}
		cur_rmr = prev_rmr // finally is not necessary due since catch does not throw
	}
	r_rmemo.rmr = new WeakRef(refresh)
	r_rmemo.rmr.l = 0
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
