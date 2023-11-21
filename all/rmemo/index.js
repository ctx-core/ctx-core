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
	let init
	let r_rmemo = {
		_rs: new Set,
		go: ()=>(r_rmemo._, r_rmemo),
		onset: ()=>0,
		get _() {
			if (!('val' in r_rmemo)) {
				let prev_r = cur_r
				cur_r = r_rmemo._r
				try {
					init()
				} finally {
					cur_r = prev_r
				}
			}
			if (cur_r) {
				cur_r.l = cur_r.l < r_rmemo._r.l + 1 ? r_rmemo._r.l + 1 : cur_r.l
				r_rmemo._rs.add(cur_r)
			}
			return r_rmemo.val
		},
		set _(val) {
			if (val !== r_rmemo.val) {
				r_rmemo.val = val
				r_rmemo.onset(val)
				let run_queue = !queue[0]
				for (let _r of r_rmemo._rs) {
					if (!~queue.indexOf(_r)) queue.push(_r)
				}
				if (!r_rmemo._sa) {
					r_rmemo._sa = subscriber_a.map(subscriber=>
						r_rmemo_(()=>subscriber(r_rmemo)).go())
				}
				if (run_queue) {
					// eslint-disable-next-line no-cond-assign
					for (let _r; _r = queue.shift();) {
						if (queue.some(queue_r=>_r.l > queue_r.l)) {
							queue.push(_r)
						} else {
							(_r.deref() || r_rmemo._rs.delete)(_r)
						}
					}
				}
			}
		}
	}
	init = ()=>r_rmemo._ = rmemo_def(r_rmemo)
	r_rmemo._r = new WeakRef(init)
	r_rmemo._r.l = 0
	return r_rmemo
}
/**
 * @param {unknown}init_val
 * @param {rmemo_subscriber_T[]}subscriber_a
 * @returns {r_rmemo_T}
 * @private
 */
export function rw_rmemo_(init_val, ...subscriber_a) {
	let rw_rmemo = r_rmemo_(_rw_rmemo=>_rw_rmemo._v, ...subscriber_a)
	rw_rmemo.onset = val=>rw_rmemo._v = val
	rw_rmemo._v = init_val
	return rw_rmemo
}
