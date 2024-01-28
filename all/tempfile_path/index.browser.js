import { crypto_ } from '../crypto/index.browser.js'
import { url__join } from '../url__join/index.browser.js'
/**
 * @param {string}[dir_path]
 * @param {string}[extension]
 * @returns {Promise<string>}
 * @private
 */
export async function tempfile_path_(
	dir_path,
	extension = ''
) {
	const crypto = await crypto_()
	return url__join([
		...(dir_path ? [dir_path] : []),
		`${crypto.randomUUID()}${
			extension
				? extension.startsWith('.') ? extension : `.${extension}`
				: ''
		}`
	])
}
export { tempfile_path_ as tempfile_ }
