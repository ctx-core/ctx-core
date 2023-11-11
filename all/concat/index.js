/**
 * Array#`concat`
 * @param {unknown[]}[a]
 * @param {unknown}rest_a
 * @returns {unknown[]}
 */
export function concat(a, ...rest_a) {
	return (a || []).concat(...rest_a)
}
/**
 * @param {unknown[]}[a]
 * @param {unknown}rest_a
 * @returns {unknown[]}
 */
export function maybe_concat(a, ...rest_a) {
	return (a || []).concat(...rest_a)
}
