/** @typedef {import('./index.d.ts').rmemo_T} */
/** @typedef {import('./index.d.ts').rmemo_subscriber_T} */
/** @type {(()=>unknown)[]} */
let queue = []
/** @type {WeakRef<rmemo_T>} */
let cur_ref
/**
 * @param {(rmemo:rmemo_T<unknown>)=>unknown}_f
 * @param {rmemo_subscriber_T<unknown>[]}subscriber_a
 * @returns {rmemo_T}
 * @private
 */
export function rmemo_(_f, ...subscriber_a) {
	let rmemo$ = (...arg_a)=>arg_a.length ? rmemo$._ = arg_a[0] : rmemo$._
	let _a = []
	let _r = new WeakRef(()=>rmemo$.refresh(_f(rmemo$)))
	_r.l = 0
	rmemo$._a = _a
	rmemo$._f = _f
	rmemo$._r = _r
	rmemo$._rS = new Set
	rmemo$.go = ()=>(rmemo$(), rmemo$)
	rmemo$.onset = ()=>0
	Object.defineProperty(rmemo$, '_', {
		get() {
			if (!_a.length) {
				let prev_ref = cur_ref
				cur_ref = _r
				try {
					_a[0] = _f(rmemo$)
				} finally {
					cur_ref = prev_ref
				}
			}
			// allow self-referencing
			if (cur_ref && cur_ref !== _r) {
				// Math.max: bitwise is much faster on chrome
				// https://measurethat.net/Benchmarks/Show/28483/0/mathmax-vs-bitwise
				cur_ref.l = cur_ref.l ^ ((cur_ref.l ^ _r.l + 1) & -(cur_ref.l < _r.l + 1))
				rmemo$._rS.add(cur_ref)
			}
			return _a[0]
		},
		set(val) {
			if (!_a.length || val !== _a[0]) {
				rmemo$.refresh(val)
			}
			return val
		}
	})
	rmemo$.refresh = val=>{
		let length = _a.length
		_a[0] = val
		rmemo$.onset(val)
		if (length) {
			let run_queue = !queue[0]
			for (let ref of rmemo$._rS) {
				if (!~queue.indexOf(ref)) queue.push(ref)
			}
			if (run_queue) {
				for (let ref; ref = queue.shift();) {
					if (queue.some(_ref=>ref.l > _ref.l)) {
						queue.push(ref)
					} else {
						(ref.deref() || rmemo$._rS.delete)(ref)
					}
				}
			}
		}
		return rmemo$
	}
	rmemo$._sa = subscriber_a.map(subscriber=>
		rmemo_(()=>subscriber(rmemo$)).go())
	return rmemo$
}
/**
 * @param {unknown}init_val
 * @param {rmemo_subscriber_T[]}subscriber_a
 * @returns {rmemo_T}
 * @private
 */
export function rsig_(init_val, ...subscriber_a) {
	let signal$ =
		rmemo_(signal$=>signal$._v, ...subscriber_a)
	signal$.onset = val=>signal$._v = val
	signal$._v = init_val
	return signal$
}
