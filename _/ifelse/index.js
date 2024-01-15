/**
 * Returns `if_(conditional)` if `conditional` else `else_(conditional)`
 * @param {unknown}conditional
 * @param {(conditional:unknown)=>unknown}if_
 * @param {(conditional:unknown)=>unknown}else_
 * @returns {unknown}
 */
export function ifelse(conditional, if_, else_) {
	return conditional ? if_(conditional) : else_(conditional)
}
