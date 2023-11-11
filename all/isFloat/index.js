import { float_isNaN_ } from '../float_isNaN/index.js'
export function isFloat(number) {
	return !float_isNaN_(number)
}
