import { access, constants } from 'node:fs/promises'
import { waitfor } from '../waitfor/index.js'
/**
 * @param {string}path
 * @returns {Promise<boolean>}
 * @private
 */
export async function file_exists_(path) {
	return (
		access(path, constants.F_OK)
			.then(()=>true)
			.catch(()=>false))
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
	return waitfor(async ()=>{
		// eslint-disable-next-line no-constant-condition
		for (; 1;) {
			try {
				return await (
					typeof path_OR_op === 'string'
						? file_exists_(path_OR_op)
						: path_OR_op()
				)
			} catch (err) {
				if (
					err.code !== 'ENOENT'
					&& !err.message?.includes('ENOENT')
				) {
					throw err
				}
			}
		}
	},
	timeout ?? 5000,
	period ?? 0)
}
