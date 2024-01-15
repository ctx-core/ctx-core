import type { sort_val_a__transition_a_frame_fn_T, sort_val_a__transition_a_frame_T } from '../array_types/index.js'
import type { eq_T } from '../eq/index.js'
/**
 * Returns a [sort_val_a__transition_a_frame_T](#sort_val_a__transition_a_frame_T) of presumably sorted items in `val_a` at each index of the new item for each changed item.
 */
export declare function sort_val_a__enter_a_frame_<I>(
	sort_val_a:readonly I[]|undefined
):sort_val_a__transition_a_frame_T<I>
export {
	sort_val_a__enter_a_frame_ as sort_val_a$enter_a_frame_,
	sort_val_a__enter_a_frame_ as entry_thold_a_compact_ctx_,
	sort_val_a__enter_a_frame_ as entry_thold_a1_compact_ctx_fn,
	sort_val_a__enter_a_frame_ as _entry_thold_a1_compact_ctx,
	sort_val_a__enter_a_frame_ as _ctx__compact__a1__thold__entry,
}
/**
 * Returns a function that returns a [sort_val_a__transition_a_frame_T](#sort_val_a__transition_a_frame_T)
 */
export declare function sort_val_a__enter_a_frame_fn_<I>(
	eq_?:eq_T<readonly I[]>
):sort_val_a__transition_a_frame_fn_T<I>
export {
	sort_val_a__enter_a_frame_fn_ as sort_val_a$enter_a_frame_fn_,
	sort_val_a__enter_a_frame_fn_ as entry_thold_a_compact_ctx_2,
	sort_val_a__enter_a_frame_fn_ as entry_thold_a1_compact_ctx_fn2,
	sort_val_a__enter_a_frame_fn_ as _entry_thold_a1_compact_ctx_fn,
	sort_val_a__enter_a_frame_fn_ as _fn__ctx__compact__a1__thold__entry,
}
/**
 * Returns a [sort_val_a__transition_a_frame_T](#sort_val_a__transition_a_frame_T) of presumably sorted items in `val_a` at each index of the old item for each changed item.
 */
export declare function sort_val_a__exit_a_frame_<I>(
	sort_val_a?:readonly I[]
):sort_val_a__transition_a_frame_T<I>
export {
	sort_val_a__exit_a_frame_ as sort_val_a$exit_a_frame_,
	sort_val_a__enter_a_frame_ as exit_thold_a_compact_ctx_,
	sort_val_a__exit_a_frame_ as exit_thold_a1_compact_ctx_fn,
	sort_val_a__exit_a_frame_ as _exit_thold_a1_compact_ctx,
	sort_val_a__exit_a_frame_ as _ctx__compact__a1__thold__exit
}
/**
 * Returns a function that returns a [sort_val_a__transition_a_frame_T](#sort_val_a__transition_a_frame_T)
 */
export declare function sort_val_a__exit_a_frame_fn_<I>(
	eq_?:eq_T<readonly I[]>
):sort_val_a__transition_a_frame_fn_T<I>
export {
	sort_val_a__exit_a_frame_fn_ as sort_val_a$exit_a_frame_fn_,
	sort_val_a__exit_a_frame_fn_ as exit_thold_a1_compact_ctx_fn2,
	sort_val_a__exit_a_frame_fn_ as _exit_thold_a1_compact_ctx_fn,
	sort_val_a__exit_a_frame_fn_ as _fn__ctx__compact__a1__thold__exit,
}
