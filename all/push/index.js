/**
 * Calls push on an array
 * @param {unknown[]}a
 * @param {unknown}arg_a
 * @returns {number}
 */
export function push(a, ...arg_a) {
	return a.push.apply(a, arg_a)
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {unknown}arg_a
 * @returns {number|undefined}
 */
export function maybe_push(maybe_a, ...arg_a) {
	return maybe_a ? push(maybe_a, ...arg_a) : void 0
}
