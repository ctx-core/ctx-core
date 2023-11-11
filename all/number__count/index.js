/** @typedef {import('../nullish/index.d.ts').nullish} */
/**
 * @param {(number|nullish)[]}number_a
 * @returns {number}
 * @private
 */
export function number__count_(number_a) {
	let number__count = 0
	for (let i = 0; i < number_a.length; i++) {
		if (number_a[i] != null) number__count++
	}
	return number__count
}