import { isFloat_andor_ } from '../isFloat_andor/index.js'
import { null_ } from '../null/index.js'
export function parseFloat_andor_(val, and_val_ = $=>$, or_val_ = null_) {
	return isFloat_andor_(parseFloat(val), and_val_, or_val_)
}
