import { color_rgb_hex_a_ } from '../color_rgb/index.js'
/**
 * Convert hex to a comma-delimited rgb string
 * @param {string}hex
 * @return {string}
 * @example
 * color_hex_rgb__comma_delim_str_('ABC'..// '170,187,204/index.js'
 * color_hex_rgb__comma_delim_str_('123456'..// '18,52,86/index.js'
 */
export function color_hex_rgb__comma_delim_str_(hex) {
	return color_rgb_hex_a_(hex).join(',')
}
export {
	color_hex_rgb__comma_delim_str_ as rgb_color_hex_comma_delim_str_,
	color_hex_rgb__comma_delim_str_ as _str__hex__color__rgb__comma_delim
}
