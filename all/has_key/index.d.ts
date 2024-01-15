/**
 * Returns true if obj has given in_key, false otherwise.
 * If no in_key given, returns true if obj has any in_key, false otherwise.
 */
export declare function has_key(obj:object, in_key?:symbol):boolean
export { has_key as has__key }
/**
 * If a key is given, returns boolean indicitating if the given key is a member of the obj.
 * If no key is given, returns boolean indicitating if the obj has any key.
 */
export declare function has_key_(obj:object, in_key?:string):boolean
export {
	has_key_ as _has_key,
	has_key_ as _has__key,
}
