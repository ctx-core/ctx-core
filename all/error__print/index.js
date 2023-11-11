/** @typedef {import('../error_o/index.d.ts').argument__error_o_T} */
/**
 * Prints the given `error_o_error` to stderr
 * @param {error_o_error_T}error_o_error
 * @type {typeof import('../error__print/index.js').error__print}
 */
export function error__print(error_o_error) {
	const {
		http__message = 'Error',
		message = 'Error'
	} = error_o_error
	console.error(`
error__print|catch
${error_o_error}
http__message: ${http__message}
message: ${message}
${error_o_error.stack}`.trim())
}
