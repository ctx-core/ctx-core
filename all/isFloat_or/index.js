import { isFloat } from '../isFloat/index.js'
import { null_ } from '../null/index.js'
export function isFloat_or_(val, or_val_ = null_) {
	return isFloat(val) ? val : or_val_(val)
}
