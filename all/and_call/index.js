/**
 * Returns a function than returns the called fn_a(value) chained with ands
 * @param {unknown[]}fn_a
 * @returns {(fn_value_a:unknown[])=>unknown}
 */
export function and_call_(fn_a) {
	return in_value=>{
		let out_value = null
		for (const fn of fn_a) {
			out_value = fn(in_value)
			if (!out_value) return out_value
		}
		return out_value
	}
}
export {
	and_call_ as and_fn_call_fn,
	and_call_ as _and_fn_call,
	and_call_ as _and__fn__call,
}
