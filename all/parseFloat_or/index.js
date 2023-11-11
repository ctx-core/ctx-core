import { isNumber_or_ } from '../isNumber_or/index.js'
import { null_ } from '../null/index.js'
export function parseFloat_or_(val, or_val_ = null_) {
	return isNumber_or_(parseFloat(val), or_val_)
}
