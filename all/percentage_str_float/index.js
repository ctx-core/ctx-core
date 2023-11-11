export function percentage_str_float_(percentage) {
	return parseFloat(percentage.replace(/%/g, ''))
}
export { percentage_str_float_ as _percentage_str_float, percentage_str_float_ as unformat__percentage, }
