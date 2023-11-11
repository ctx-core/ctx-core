/** @typedef {import('../falsy/index.d.ts').falsy} */
/**
 * @param {unknown[]}a
 * @param {(...$:unknown[])=>unknown}_
 * @param {(falsy:falsy)=>any}[onfalsy]
 * @returns {unknown}
 */
export function falsy__none_(a, _, onfalsy) {
	for (const v of a) {
		if (v === undefined) {
			if (onfalsy) onfalsy(undefined)
			return undefined
		}
	}
	for (const v of a) {
		if (v === null) {
			if (onfalsy) onfalsy(null)
			return null
		}
	}
	return _(...a)
}
export { falsy__none_ as falsy__check_ }
