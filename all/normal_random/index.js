/**
 * @returns {number}
 * @see {@link https://npmdoc.github.io/node-npmdoc-mathjs/build/apidoc.html}
 */
export function normal_random_() {
	let u1, u2, picked = -1
	// We reject values outside of the interval [0, 1]
	// TODO: check if it is ok to do that?
	while (picked < 0 || picked > 1) {
		u1 = Math.random()
		u2 = Math.random()
		picked =
			1 / 6
			* Math.pow(-2 * Math.log(u1), 0.5)
			* Math.cos(2 * Math.PI * u2) + 0.5
	}
	return picked
}
export { normal_random_ as _random__normal }
