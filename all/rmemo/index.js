/** @typedef {import('./index.d.ts').rmemo_def_T} */
/** @typedef {import('./index.d.ts').r_rmemo_T} */
/** @typedef {import('./index.d.ts').rmemo_subscriber_T} */
/** @type {WeakRef<r_rmemo_T>} */
let cur_ref
/** @type {(()=>unknown)[]} */
let queue = []
/**
 * @param {rmemo_def_T}rmemo_def
 * @param {rmemo_subscriber_T<unknown>[]}subscriber_a
 * @returns {r_rmemo_T}
 * @private
 */
export function r_rmemo_(rmemo_def, ...subscriber_a) {
	let r_rmemo = (...arg_a)=>arg_a.length ? r_rmemo._ = arg_a[0] : r_rmemo._
	let init = ()=>r_rmemo._ = rmemo_def(r_rmemo)
	let _r = new WeakRef(init)
	r_rmemo._r = _r
	r_rmemo._rS = new Set
	_r.l = 0
	r_rmemo.go = ()=>(r_rmemo(), r_rmemo)
	r_rmemo.onset = ()=>0
	Object.defineProperty(r_rmemo, '_', {
		get() {
			if (!('val' in r_rmemo)) {
				let prev_ref = cur_ref
				cur_ref = _r
				try {
					init()
				} finally {
					cur_ref = prev_ref
				}
			}
			// allow self-referencing
			if (cur_ref && cur_ref !== _r) {
				cur_ref.l = cur_ref.l < _r.l + 1 ? _r.l + 1 : cur_ref.l
				r_rmemo._rS.add(cur_ref)
			}
			return r_rmemo.val
		},
		set(val) {
			if (val !== r_rmemo.val) {
				r_rmemo.val = val
				r_rmemo.onset(val)
				let run_queue = !queue[0]
				for (let ref of r_rmemo._rS) {
					if (!~queue.indexOf(ref)) queue.push(ref)
				}
				if (!r_rmemo._sa) {
					r_rmemo._sa = subscriber_a.map(subscriber=>
						r_rmemo_(()=>subscriber(r_rmemo)).go())
				}
				if (run_queue) {
					// eslint-disable-next-line no-cond-assign
					for (let ref; ref = queue.shift();) {
						if (queue.some(_ref=>ref.l > _ref.l)) {
							queue.push(ref)
						} else {
							(ref.deref() || r_rmemo._rS.delete)(ref)
						}
					}
				}
			}
		}
	})
	return r_rmemo
}
/**
 * @param {unknown}init_val
 * @param {rmemo_subscriber_T[]}subscriber_a
 * @returns {r_rmemo_T}
 * @private
 */
export function rw_rmemo_(init_val, ...subscriber_a) {
	let rw_rmemo = r_rmemo_(_rsig=>_rsig._v, ...subscriber_a)
	rw_rmemo.onset = val=>rw_rmemo._v = val
	rw_rmemo._v = init_val
	return rw_rmemo
}
