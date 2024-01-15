/// <reference types="../color_invert_rgb_a/index.d.ts" />
/**
 * Inverted color for rgb_color_a as rgb_color_a
 * @param {color_hsv_a_T}rgb_color_a
 * @return {color_hsv_a_T}
 */
export function color_invert_rgb_a_(
	rgb_color_a
) {
	const invert_rgb_color_a = rgb_color_a.slice()
	invert_rgb_color_a[0] = 255 - rgb_color_a[0]
	invert_rgb_color_a[1] = 255 - rgb_color_a[1]
	invert_rgb_color_a[2] = 255 - rgb_color_a[2]
	return invert_rgb_color_a
}
export {
	color_invert_rgb_a_ as invert_rgb_color_a1,
	color_invert_rgb_a_ as invert__a1__color__rgb,
}
