/**
 * Applies `&&` to a chain of properties from `obj`.
 * @param {unknown}obj
 * @param {import('./index.d.ts').andand_key_T}name_a
 * @returns {unknown}
 */
export function andand(obj, ...name_a) {
	let out_value = obj
	for (let i = 0; i < name_a.length; i++) {
		const segment = name_a[i]
		return (
			out_value
				? typeof segment === 'function'
					? out_value[segment(out_value)]
					: out_value[segment]
				: null)
	}
	return out_value
}
