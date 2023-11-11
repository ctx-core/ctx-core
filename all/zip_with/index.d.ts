/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `wrap_aa_T`.
 */
export declare function zip_with<
	I extends readonly unknown[][] = readonly unknown[][],
	O extends readonly unknown[][] = readonly I[number][number][][]
>(
	aa:I,
	fn?:zip_with_fn_T<I[number], O[number]>
):O
export declare function maybe_zip_with<
	I extends readonly unknown[][] = readonly unknown[][],
	O extends readonly unknown[][] = readonly I[number][number][][],
	Or = unknown
>(
	a2:I,
	fn?:zip_with_fn_T<I[number], O[number]>,
	or?:Or
):O|Or
export declare function default_zip_with_2<
	I extends readonly unknown[] = readonly unknown[],
	O extends unknown[] = I[number][]
>():zip_with_fn_T<I, O>
export declare type zip_with_fn_T<
	I extends readonly unknown[] = readonly unknown[],
	O extends readonly unknown[] = readonly I[number][]
> = (a:I, i:number)=>O
export {
	zip_with as zipWith,
	maybe_zip_with as maybe_zipWith,
}
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 */
export declare function zip_with_<
	I extends readonly unknown[][] = readonly unknown[][],
	O extends readonly unknown[][] = readonly I[number][number][][]
>(fn:zip_with_fn_T<I[number], O[number]>):(...a2:I)=>O|undefined
export {
	zip_with_ as _zip_with,
	zip_with_ as _zipWith,
	zip_with_ as _fn__zipWith,
}
