import { isNumber_ } from '../isNumber/index.js'
export function isNumber_andor_(val, and_val_ = $=>$, or_val_ = null_) {
	return (
		isNumber_(val)
			? and_val_(val)
			: or_val_(val)
	)
}
