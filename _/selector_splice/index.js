/**
 * splice out any `array` elements matching `selector`
 * @param {unknown[]}a
 * @param {(v:unknown, i:number, a:unknown[])=>unknown}selector
 * @returns {unknown[]}
 */
export function selector_splice(a, selector) {
	const index = a.findIndex(selector)
	if (index > -1) {
		a.splice(index, 1)
	}
	return a
}
export {
	selector_splice as splice__selector,
	selector_splice as splice__selector__a1,
}
