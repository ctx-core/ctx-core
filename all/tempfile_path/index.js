import { crypto_ } from '../crypto/index.js'
import { url__join } from '../url__join/index.js'
let node_fs_promises = 'node:fs/promises'
let node_os = 'node:os'
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
	if (dir_path == null) {
		dir_path =
			typeof window === 'undefined'
				? await import(node_fs_promises)
					.then(fs=>
						import(node_os)
							.then(os=>
								fs.realpath(os.tmpdir())))
				: null
	}
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
