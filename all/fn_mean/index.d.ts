import type { nullish } from '../nullish/index.js'
/**
 * Averages the items in passed in array
 */
export declare function fn_mean_<I = number>(
	a:readonly I[],
	numerator_:(val:I)=>number|nullish
):number
export {
	fn_mean_ as fn_avg,
	fn_mean_ as _fn_avg,
	fn_mean_ as _avg__fn,
}
