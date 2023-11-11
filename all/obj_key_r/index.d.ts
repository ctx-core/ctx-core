import type { valueof } from '../valueof/index.js'
/**
 * Returns Hash of each `value[key]` in `obj`.
 */
export declare function obj_key_r_<T>(obj:T, key:keyof T):Record<string, valueof<T>>
export {
	obj_key_r_ as obj_key_h_,
	obj_key_r_ as _obj_key_hash,
	obj_key_r_ as _hash__key__obj,
}
