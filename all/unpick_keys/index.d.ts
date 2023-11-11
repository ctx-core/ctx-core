/**
 * Does not include keys on `keys_obj` from `obj`
 */
export declare function unpick_keys<
	I extends object = object,
	KEYS_OBJ extends object = object
>(obj:I, keys_obj:KEYS_OBJ):Partial<I>
export { unpick_keys as unpick__keys }
