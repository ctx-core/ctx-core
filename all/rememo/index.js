/** @typedef {import('./index.d.ts').rememo_T} */
/** @typedef {import('./index.d.ts').rememo_subscriber_T} */
/** @type {(()=>unknown)[]} */
let queue = []
/** @type {WeakRef<rememo_T>} */
let cur_ref
/**
 * @param {(rememo:rememo_T<unknown>)=>unknown}_f
 * @param {rememo_subscriber_T<unknown>[]}subscriber_a
 * @returns {rememo_T}
 * @private
 */
export function rememo_(_f, ...subscriber_a) {
	let rememo$ = (...arg_a)=>arg_a.length ? rememo$._ = arg_a[0] : rememo$._
	let _a = []
	let _r = new WeakRef(()=>rememo$.refresh(_f(rememo$)))
	_r.l = 0
	rememo$._a = _a
	rememo$._f = _f
	rememo$._r = _r
	rememo$._rS = new Set
	rememo$.go = ()=>(rememo$(), rememo$)
	rememo$.onset = ()=>0
	Object.defineProperty(rememo$, '_', {
		get() {
			if (!_a.length) {
				let prev_ref = cur_ref
				cur_ref = _r
				try {
					_a[0] = _f(rememo$)
				} finally {
					cur_ref = prev_ref
				}
			}
			// allow self-referencing
			if (cur_ref && cur_ref !== _r) {
				// Math.max: bitwise is much faster on chrome
				// https://measurethat.net/Benchmarks/Show/28483/0/mathmax-vs-bitwise
				cur_ref.l = cur_ref.l ^ ((cur_ref.l ^ _r.l + 1) & -(cur_ref.l < _r.l + 1))
				rememo$._rS.add(cur_ref)
			}
			return _a[0]
		},
		set(val) {
			if (!_a.length || val !== _a[0]) {
				rememo$.refresh(val)
			}
			return val
		}
	})
	rememo$.refresh = val=>{
		let length = _a.length
		_a[0] = val
		rememo$.onset(val)
		if (length) {
			let run_queue = !queue[0]
			for (let ref of rememo$._rS) {
				if (!~queue.indexOf(ref)) queue.push(ref)
			}
			if (run_queue) {
				for (let ref; ref = queue.shift();) {
					if (queue.some(_ref=>ref.l > _ref.l)) {
						queue.push(ref)
					} else {
						(ref.deref() || rememo$._rS.delete)(ref)
					}
				}
			}
		}
		return rememo$
	}
	rememo$._sa = subscriber_a.map(subscriber=>
		rememo_(()=>subscriber(rememo$)).go())
	return rememo$
}
/**
 * @param {unknown}init_val
 * @param {rememo_subscriber_T[]}subscriber_a
 * @returns {rememo_T}
 * @private
 */
export function signal_(init_val, ...subscriber_a) {
	let signal$ =
		rememo_(signal$=>signal$._v, ...subscriber_a)
	signal$.onset = val=>signal$._v = val
	signal$._v = init_val
	return signal$
}
