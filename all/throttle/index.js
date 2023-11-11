/**
 * @param {Function}fn
 * @param {number}[threshold]
 * @param {number}[scope]
 * @returns {(this:unknown)=>void}
 * @see {@link https://remysharp.com/2010/07/21/throttling-function-calls}
 */
export function throttle(fn, threshold = 250, scope) {
	threshold || (threshold = 250)
	let last, deferTimer
	return function() {
		const context = scope || this
		const now = +new Date, args = arguments
		if (last && now < last + threshold) {
			// hold on to it
			clearTimeout(deferTimer)
			deferTimer = setTimeout(()=>{
				last = now
				fn.apply(context, args)
			}, threshold)
		} else {
			last = now
			fn.apply(context, args)
		}
	}
}
