/**
 * @param {($:unknown)=>unknown}arg_a
 * @returns {unknown}
 */
export function run_pipe(...arg_a) {
	let argv = []
	for (const _ of arg_a) {
		argv = [_(...argv)]
	}
	return argv[0]
}
