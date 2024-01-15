/**
 * Returns a function than returns first truthy value from fn_a
 * @param {(value:unknown)=>unknown}fn_a
 * @returns {(value:unknown)=>unknown}
 */
export function call_or_fn_(fn_a) {
	return (value)=>{
		let out_value = null
		for (let i = 0; i < fn_a.length; i += 1) {
			out_value = fn_a[i](value)
			if (out_value) return out_value
		}
		return out_value
	}
}
export {
	call_or_fn_ as _call_or_fn,
	call_or_fn_ as _or_fn__call,
	call_or_fn_ as _or__fn__call,
}
