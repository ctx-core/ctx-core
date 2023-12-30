/**
 * @param {(...arg_a:unknown)=>unknown}fn
 * @param {unknown}arg_a
 * @returns {unknown}
 */
export function run(...arg_a) {
	return (
		typeof arg_a[0] === 'function'
			? arg_a[0](...arg_a.slice(1))
			: arg_a[1](...arg_a[0])
	)
}
export { run as _ }
