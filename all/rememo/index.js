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
	let _a = []
	let _rS = new Set
	let rememo$ = (...arg_a)=>arg_a.length ? rememo$._ = arg_a[0] : rememo$._
	rememo$._a = _a
	rememo$._f = _f
	rememo$._rS = _rS
	rememo$._r = new WeakRef(()=>rememo$.refresh(_f(rememo$)))
	rememo$.onset = ()=>0
	rememo$._r.l = 0
	rememo$.init = ()=>(rememo$(), rememo$)
	Object.defineProperty(rememo$, '_', {
		get() {
			// allow self-referencing
			if (!_a.length) {
				let prev_ref = cur_ref
				cur_ref = rememo$._r
				try {
					_a[0] = _f(rememo$)
				} finally {
					cur_ref = prev_ref
				}
			}
			if (cur_ref && cur_ref !== rememo$._r) {
				cur_ref.l = Math.max(rememo$._r.l + 1, cur_ref.l)
				_rS.add(cur_ref)
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
		let { length } = _a
		_a[0] = val
		rememo$.onset(val)
		if (length) {
			let run_queue = !queue[0]
			for (let ref of _rS) {
				if (!~queue.indexOf(ref)) queue.push(ref)
			}
			if (run_queue) {
				for (let ref; ref = queue.shift();) {
					queue.some(_ref=>ref.l > _ref.l) ? queue.push(ref) : ref.deref()?.() ?? _rS.delete(ref)
				}
			}
		}
		return rememo$
	}
	rememo$._sa = subscriber_a.map(subscriber=>
		rememo_(()=>subscriber(rememo$)).init())
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
