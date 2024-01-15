/**
 * Does not include `key_a` from `obj`
 */
export declare function unpick<
	In extends Record<string, any> = object,
	Out extends Partial<In> = Partial<In>
>(obj:In, ...key_a:string[]):Partial<In>
export declare function maybe_unpick<
	In extends Record<string, any> = object,
	Out extends Partial<In> = Partial<In>
>(obj:In, ...key_a:string[]):void|Partial<In>
