import { isNumber_or_ } from '../isNumber_or/index.js'
import { null_ } from '../null/index.js'
export function parseInt_or_(val, or_val_ = null_) {
	return isNumber_or_(parseInt(val), or_val_)
}
