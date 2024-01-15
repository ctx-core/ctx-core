/**
 * @returns {string[]}
 */
export function stacktrace_() {
	const err = new Error
	return err.stack.split('\n')
}
/**
 * @returns {string}
 */
export function stacktrace_filename_() {
	const stacktrace_filename_line = stacktrace_filename_line_()
	return stacktrace_filename_line.slice(0 + 1, stacktrace_filename_line.indexOf(':'))
}
/**
 * @returns {number}
 */
export function stacktrace_line_() {
	const stacktrace_filename_line = stacktrace_filename_line_()
	return parseInt(
		stacktrace_filename_line.slice(stacktrace_filename_line.indexOf(':') + 1,
			stacktrace_filename_line.lastIndexOf(':')))
}
/**
 * @returns {string}
 */
export function stacktrace_line_pos_() {
	const stacktrace_filename_line = stacktrace_filename_line_()
	return stacktrace_filename_line.slice(
		stacktrace_filename_line.lastIndexOf(':') + 1)
}
/**
 * @param {string}[stack_line]
 * @returns {string}
 */
export function stacktrace_filename_line_(stack_line = stacktrace_()[3]) {
	return (
		stack_line.slice(
			stack_line.lastIndexOf('/'), stack_line.lastIndexOf(')'))
		|| stack_line.slice(stack_line.lastIndexOf('('), stack_line.lastIndexOf(')'))
	)
}
