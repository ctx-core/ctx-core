export declare function extract<
	Type,
	TActual extends Type = Type
>(
	value:TActual,
	properties:Record<keyof Type, true>
):Type
/**
 * @see {@link https://stackoverflow.com/a/50895613/142571}
 */
export declare function extract_<Type>(
	properties:Record<keyof Type, true>
):<TActual extends Type>(val:TActual)=>Type;
export { extract_ as _extract, }
