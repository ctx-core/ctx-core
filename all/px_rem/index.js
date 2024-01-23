import { rem_px_ } from '../rem_px/index.js'
export function px_rem_(px = 16) {
	return px / rem_px_(1)
}
export { px_rem_ as _px_rem, }
