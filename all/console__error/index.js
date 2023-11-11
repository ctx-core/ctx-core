/** @typedef {import('../error_o/index.d.ts').error_o_error_T} */
/**
 * Logs the given error_o_error to stderr
 * @param {error_o_error_T}error_o_error
 */
export function console__error(error_o_error) {
	const message =
		error_o_error.message
		|| error_o_error && error_o_error.toString()
		|| 'console__error|Unknown Error'
	const stack = error_o_error && error_o_error.stack
	console.error(`
console__error
${stack}
${message}
${JSON.stringify(error_o_error)}
	`.trim())
}
