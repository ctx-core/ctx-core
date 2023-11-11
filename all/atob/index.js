/**
 * @param {string}str
 * @returns {string}
 */
export function atob(str) {
	return (
		globalThis['window']
			? window.atob(str)
			: Buffer.from(str, 'base64').toString('binary')
	)
}
/** @type {typeof import('./index.d.ts').atob_} */
export const atob_ = ()=>{
	return atob
}
export { atob_ as _atob, }
