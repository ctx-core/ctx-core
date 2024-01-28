import { waitfor } from '../waitfor/index.browser.js'
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
 * @param {string}path
 * @param {number}[timeout]
 * @param {number|((promise:waitfor_Promise<boolean>)=>Promise<number>)}[period]
 * @returns {Promise<boolean>}
 */
export function file_exists__waitfor(
	path,
	timeout,
	period
) {
	return waitfor(()=>
		file_exists_(path),
	timeout ?? 5000,
	period ?? 0)
}
