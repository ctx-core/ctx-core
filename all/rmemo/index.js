/** @typedef {import('./index.d.ts').rmemo_def_T} */
/** @typedef {import('./index.d.ts').r_rmemo_T} */
/** @typedef {import('./index.d.ts').rmemo_subscriber_T} */
/** @type {WeakRef<r_rmemo_T>} */
let cur_r
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
				let prev_r = cur_r
				cur_r = r_rmemo.rmr
				try {
					refresh()
				} finally {
					cur_r = prev_r
				}
			}
			if (cur_r) {
				cur_r.l = cur_r.l < r_rmemo.rmr.l + 1
					? r_rmemo.rmr.l + 1
					: cur_r.l
				r_rmemo.rmrs ||= new Set
				r_rmemo.rmrs.add(cur_r)
			}
			return r_rmemo.val
		},
		set _(val) {
			if (val !== r_rmemo.val) {
				r_rmemo.val = val
				let run_queue = !queue[0]
				for (let rmr of (r_rmemo.rmrs ||= new Set)) {
					if (!~queue.indexOf(rmr)) queue.push(rmr)
				}
				if (!r_rmemo._sa) {
					// add reference to subscribers to prevent GC
					r_rmemo._sa = subscriber_a.map(subscriber=>
						r_rmemo_(()=>subscriber(r_rmemo)).go())
				}
				if (run_queue) {
					// eslint-disable-next-line no-cond-assign
					for (let rmr; rmr = queue.shift();) {
						if (queue.some(queue_r=>rmr.l > queue_r.l)) {
							queue.push(rmr)
						} else {
							(rmr.deref() || r_rmemo.rmrs.delete)(rmr)
						}
					}
				}
			}
		},
		go: ()=>(r_rmemo._, r_rmemo),
		get: ()=>r_rmemo._,
		set: val=>r_rmemo._ = val,
	}
	refresh = ()=>r_rmemo._ = rmemo_def(r_rmemo)
	r_rmemo.rmr = new WeakRef(refresh)
	r_rmemo.rmr.l = 0
	return r_rmemo
}
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
