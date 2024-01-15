/**
 * Returns the obj with default values. If `obj[key] == null`, use `default[key]`
 */
export declare function defaults<
	I extends object = object
>(obj:I, ...defaults_a:Partial<I>[]):I
