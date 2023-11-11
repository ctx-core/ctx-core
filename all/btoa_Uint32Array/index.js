import { btoa_ } from '../btoa/index.js'
/**
 * btoa helper functions
 */
/** @type {typeof import('../btoa_Uint32Array/index.d.ts').btoa_Uint32Array_} */
export const btoa_Uint32Array_ = b64=>{
	const btoa = btoa_()
	const $ = btoa(b64)
	const { length } = $
	/** @type {Uint32Array} */
	let btoa_Uint32Array = new Uint32Array(length)
	for (let i = 0; i < length; i++) {
		btoa_Uint32Array[i] = $.charCodeAt(i)
	}
	return btoa_Uint32Array
}
export {
	btoa_Uint32Array_ as _btoa_Uint32Array,
	btoa_Uint32Array_ as _Uint32Array__btoa,
}
