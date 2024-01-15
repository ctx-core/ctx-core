const { floor } = Math
/**
 * Returns a rgb array value from the given `(h,s,v)` (Hue, Saturation, Value)
 * @param {import('./color_hsv_a_T.d.ts').color_hsv_a_T}hsv_color_a
 * @see {@link http://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB}
 */
export function color_rgb_a__color_hsv_a_(
	hsv_color_a
) {
	const [h, s, v] = hsv_color_a
	const h_i = floor(h * 6)
	const f = h * 6 - h_i
	const p = v * (1 - s)
	const q = v * (1 - f * s)
	const t = v * (1 - (1 - f) * s)
	let r = 0, g = 0, b = 0
	if (h_i === 0) {
		[r, g, b] = [v, t, p]
	} else if (h_i === 1) {
		[r, g, b] = [q, v, p]
	} else if (h_i === 2) {
		[r, g, b] = [p, v, t]
	} else if (h_i === 3) {
		[r, g, b] = [p, q, v]
	} else if (h_i === 4) {
		[r, g, b] = [t, p, v]
	} else if (h_i === 5) {
		[r, g, b] = [v, p, q]
	}
	return [floor(r * 256), floor(g * 256), floor(b * 256)]
}
export {
	color_rgb_a__color_hsv_a_ as hsv_color_a1_from_rgb_color_a1_,
	color_rgb_a__color_hsv_a_ as _hsv_color_a1_from_rgb_color_a1,
	color_rgb_a__color_hsv_a_ as _a1__color__rgb__from__a1__color__hsv,
}
