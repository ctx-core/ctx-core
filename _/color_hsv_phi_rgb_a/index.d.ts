import type { color_hsv_a_T } from '../color_hsv/index.js'
import type { color_rgb_a_T } from '../color_rgb/index.js'
/**
 * Returns an array of colors with a given sv (`[saturation, value]`)
 * with h (hue) seperated by `1/PHI`
 * @see {@link https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/}
 */
export declare function color_hsv_phi_rgb_a_(
	params:hsv_phi_rgb_color_a__params_T
):color_rgb_a_T[]
export interface hsv_phi_rgb_color_a__params_T {
	length:number
	hsv:color_hsv_a_T
}
export {
	color_hsv_phi_rgb_a_ as hsv_phi_rgb_color_a_,
	color_hsv_phi_rgb_a_ as _hsv_phi_rgb_color_a1,
	color_hsv_phi_rgb_a_ as _a1__color__rgb__phi__hsv,
}
