/**
 * @param {(...args:unknown[])=>unknown}fn
 * @param {number}[times]
 * @returns {import('./index.d.ts').noinit_T}
 */
export function noinit_(fn, times = 1) {
	let times_called = 0
	return (...args)=>{
		if (times_called < times) {
			times_called += 1
			return
		}
		return fn(...args)
	}
}
export { noinit_ as _noinit, }
