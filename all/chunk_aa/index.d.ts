/**
 * Splits array into chunks
 */
export declare function chunk_aa_<I, Length extends number = number>(
	a:readonly I[],
	chunk_length:Length
):chunk_aa_T<I, Length>
export {
	chunk_aa_ as chunk_a2_,
	chunk_aa_ as _a2__chunk,
	chunk_aa_ as _chunk_a2,
	chunk_aa_ as chunk_couple_fn,
}
export type chunk_aa_T<I, Length extends number> =
	Length extends 1
		? [I][]
		: Length extends 2
			? [I, I][]
			: Length extends 3
				? [I, I, I][]
				: Length extends 4
					? [I, I, I, I][]
					: Length extends 5
						? [I, I, I, I, I][]
						: Length extends 6
							? [I, I, I, I, I, I][]
							: Length extends 7
								? [I, I, I, I, I, I, I][]
								: Length extends 8
									? [I, I, I, I, I, I, I, I][]
									: Length extends 9
										? [I, I, I, I, I, I, I, I, I][]
										: I[][]
