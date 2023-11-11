/**
 * Calls functions in fn_a with ...arg_a
 * @param {(...arg_a:unknown[])=>unknown}fn_a
 * @param {unknown}arg_a
 * @returns {unknown[]}
 */
export function call_fn_a(fn_a, ...arg_a) {
	const returns = []
	for (let i = 0; i < fn_a.length; i++) {
		returns.push(fn_a[i](...arg_a))
	}
	return returns
}
export { call_fn_a as call__a1__fn, }
