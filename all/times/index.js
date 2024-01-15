/**
 * Returns array with the index as each item.
 * @param {number}num
 * @param {(idx:number)=>unknown}fn
 * @returns {unknown[]}
 */
export function times(num, fn) {
	const a = []
	for (let idx = 0; idx < num; idx++) {
		a.push(fn(idx))
	}
	return a
}
