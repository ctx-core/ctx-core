import { distribution_random_float_ } from '../distribution_random_float/index.js'
import { normal_random_ } from '../normal_random/index.js'
export function normal_random_float_(min = 0.0, max = 1.0) {
	return distribution_random_float_(min, max, normal_random_)
}
export { normal_random_float_ as _float__random__normal }
