/**
 * Picks the keys on `in_key_obj` from `obj`
 */
export declare function pick_keys<
	I extends object = object,
	KEYS_OBJ extends object = object
>(obj:I, in_key_obj:KEYS_OBJ):Partial<I>
export { pick_keys as pick__keys }
