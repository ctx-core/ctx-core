/** @typedef {import('../nullish/index.d.ts').nullish} */
/**
 * @param {unknown[]}a
 * @param {(...$:unknown[])=>unknown}_
 * @param {(nullish:nullish)=>any}[onnullish]
 * @returns {unknown}
 */
export function nullish__not_all_(a, _, onnullish) {
	let nullish
	for (const v of a) {
		if (v != null) return _(...a)
		if (v === null) nullish = null
	}
	if (onnullish) onnullish(nullish)
	return nullish
}
