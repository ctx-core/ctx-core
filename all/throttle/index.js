/**
 * @param {Function}fn
 * @param {number}[threshold]
 * @param {unknown}[_this]
 * @returns {(this:unknown)=>void}
 * @see {@link https://remysharp.com/2010/07/21/throttling-function-calls}
 */
export function throttle(fn, threshold = 250, _this) {
	threshold || (threshold = 250)
	let last, defer_timeout_id
	return function(...arg_a) {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		_this ||= this
		const now = +new Date
		if (last && now < last + threshold) {
			// hold on to it
			clearTimeout(defer_timeout_id)
			defer_timeout_id = setTimeout(()=>{
				last = now
				fn.apply(_this, arg_a)
			}, threshold)
		} else {
			last = now
			fn.apply(_this, arg_a)
		}
	}
}
