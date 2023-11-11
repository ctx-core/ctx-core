import { color_rgb_a__color_hsv_a_ } from '../color_hsv/index.js'
import { PHI } from '../PHI/index.js'
const { floor } = Math
/**
 * Returns an array of colors with a given sv (`[saturation, value]`)
 * with h (hue) seperated by `1/PHI`
 * @param {import('../color_rgb_a__color_hsv_a/index.js').hsv_phi_rgb_color_a__params_T}params
 * @returns {import('../color_rgb_a__color_hsv_a/index.js').color_rgb_a_T[]}
 * @see {@link https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/}
 */
export function color_hsv_phi_rgb_a_(
	params
) {
	const { length, hsv, } = params
	const [s, v] = hsv.slice(1)
	const colors = []
	const PHI_inverse = 1 / PHI
	let n = length
	const h_float = parseFloat(hsv[0].toString())
	let h = isNaN(h_float) ? Math.random() : h_float
	while (n) {
		h += PHI_inverse
		h = h - floor(h)
		colors.push(color_rgb_a__color_hsv_a_([h, s, v]))
		n--
	}
	return colors
}
export {
	color_hsv_phi_rgb_a_ as _hsv_phi_rgb_color_a1,
	color_hsv_phi_rgb_a_ as _a1__color__rgb__phi__hsv,
}
