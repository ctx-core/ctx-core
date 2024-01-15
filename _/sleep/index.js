/**
 * @param {number}ms
 * @returns {Promise<number>}
 */
export function sleep(ms) {
	return new Promise(resolve=>
		setTimeout(resolve, ms))
}
