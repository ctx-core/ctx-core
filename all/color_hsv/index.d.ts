import { color_rgb_a_T } from '../color_rgb/index.js'
/**
 * Returns a rgb array value from the given `(h,s,v)` (Hue, Saturation, Value)
 *
 * @see {@link http://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB}
 */
export declare function color_rgb_a__color_hsv_a_(
	hsv_color_a:color_hsv_a_T
):color_rgb_a_T
export {
	color_rgb_a__color_hsv_a_ as hsv_color_a_from_rgb_color_a_,
	color_rgb_a__color_hsv_a_ as hsv_color_a1_from_rgb_color_a1_,
	color_rgb_a__color_hsv_a_ as _hsv_color_a1_from_rgb_color_a1,
	color_rgb_a__color_hsv_a_ as _a1__color__rgb__from__a1__color__hsv,
}
export declare type color_hsv_a_T = [number, number, number]
export declare type hsv_color_a_T = color_hsv_a_T
export declare type hsv_color_a1_T = color_hsv_a_T
