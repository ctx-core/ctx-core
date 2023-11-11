/**
 * @param {ArrayBuffer|Buffer}buffer
 * @return {string}
 * @private
 */
export function buffer__base64_(buffer) {
	if (globalThis['window']) {
		let binary = ''
		const bytes = new Uint8Array(buffer)
		const len = bytes.byteLength
		for (let i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i])
		}
		return window.btoa(binary)
	} else {
		return buffer.toString('base64')
	}
}
export {
	buffer__base64_ as buffer_base64_,
	buffer__base64_ as _buffer_base64,
}
