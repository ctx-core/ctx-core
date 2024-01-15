import { isNumber_ } from '../isNumber/index.js'
import { null_ } from '../null/index.js'
export function isNumber_or_(val, or_val_ = null_) {
	return isNumber_(val) ? val : or_val_(val)
}
