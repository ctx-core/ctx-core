/**
 * @param {number} n
 * @returns {number}
 */
export function fibonacci_number_(n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci_number_(n - 1) + fibonacci_number_(n - 2)
}
export {
	fibonacci_number_ as _fibonacci_number,
	fibonacci_number_ as _number__fibonacci,
}
