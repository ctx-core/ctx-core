/**
 * @param {string}path
 * @returns {Promise<boolean>}
 * @private
 */
export async function file_exists_(path) {
	return false
}
export {
	file_exists_ as path__exists_
}
/**
 * @param {string|(()=>unknown|Promise<unknown>)}path_OR_op
 * @param {number}[timeout]
 * @param {number|((promise:waitfor_Promise<boolean>)=>Promise<number>)}[period]
 * @returns {Promise<boolean>}
 */
export function file_exists__waitfor(
	path_OR_op,
	timeout,
	period
) {
	throw new Error('no browser support')
}
