/**
 * @param {number}[length]
 * @returns {string}
 */
export function base16_random(length = 5) {
	const value_a = []
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const length__possible = possible.length
	for (let i = 0; i < length; i++) {
		value_a.push(possible.charAt(Math.floor(Math.random() * length__possible)))
	}
	return value_a.join('')
}
export { base16_random as random__base16 }
