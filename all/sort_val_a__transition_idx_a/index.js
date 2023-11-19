import { eq } from '../eq/index.js'
/** @typedef {import('../eq/index.d.ts').eq_T} */
/** @typedef {import('../array_types/index.d.ts').sort_val_a__transition_a_frame_fn_T} */
/** @typedef {import('../array_types/index.d.ts').sort_val_a__transition_a_frame_T} */
/**
 * Returns a [sort_val_a__transition_a_frame_T](#sort_val_a__transition_a_frame_T) of presumably sorted items in `val_a` at each index of the new item for each changed item.
 * @param {unknown[]|undefined}sort_val_a
 * @returns {sort_val_a__transition_a_frame_T}
 */
export function sort_val_a__enter_a_frame_(sort_val_a) {
	return sort_val_a__enter_a_frame_fn_()(sort_val_a)
}
export {
	sort_val_a__enter_a_frame_ as sort_val_a$enter_a_frame_,
	sort_val_a__enter_a_frame_ as entry_thold_a_compact_ctx_,
	sort_val_a__enter_a_frame_ as entry_thold_a1_compact_ctx_fn,
	sort_val_a__enter_a_frame_ as _entry_thold_a1_compact_ctx,
	sort_val_a__enter_a_frame_ as _ctx__compact__a1__thold__entry,
}
/**
 * Returns a function that returns a [sort_val_a__transition_a_frame_T](#sort_val_a__transition_a_frame_T)
 * @param {eq_T}[eq_]
 * @returns {sort_val_a__transition_a_frame_fn_T}
 */
export function sort_val_a__enter_a_frame_fn_(eq_ = eq) {
	return sort_val_a=>{
		const idx_a = []
		const val_a = []
		if (sort_val_a) {
			for (let i = 0; i < sort_val_a.length; i++) {
				const sort_val = sort_val_a[i]
				const prev_sort_val = sort_val_a[i - 1]
				if (!i || (
					eq_ ? !eq_([sort_val, prev_sort_val])
						: sort_val !== prev_sort_val)
				) {
					idx_a.push(i)
					val_a.push(sort_val)
				}
			}
		}
		return {
			idx_a,
			val_a
		}
	}
}
export {
	sort_val_a__enter_a_frame_fn_ as sort_val_a$enter_a_frame_fn_,
	sort_val_a__enter_a_frame_fn_ as entry_thold_a_compact_ctx_2,
	sort_val_a__enter_a_frame_fn_ as entry_thold_a1_compact_ctx_fn2,
	sort_val_a__enter_a_frame_fn_ as _entry_thold_a1_compact_ctx_fn,
	sort_val_a__enter_a_frame_fn_ as _fn__ctx__compact__a1__thold__entry,
}
/**
 * Returns a [sort_val_a__transition_a_frame_T](#sort_val_a__transition_a_frame_T) of presumably sorted items in `val_a` at each index of the old item for each changed item.
 * @param {unknown[]}[sort_val_a]
 * @returns {sort_val_a__transition_a_frame_T}
 */
export function sort_val_a__exit_a_frame_(sort_val_a) {
	return sort_val_a__exit_a_frame_fn_()(sort_val_a)
}
export {
	sort_val_a__exit_a_frame_ as sort_val_a$exit_a_frame_,
	sort_val_a__exit_a_frame_ as exit_thold_a_compact_ctx_,
	sort_val_a__exit_a_frame_ as exit_thold_a1_compact_ctx_fn,
	sort_val_a__exit_a_frame_ as _exit_thold_a1_compact_ctx,
	sort_val_a__exit_a_frame_ as _ctx__compact__a1__thold__exit,
}
/**
 * Returns a function that returns a [sort_val_a__transition_a_frame_T](#sort_val_a__transition_a_frame_T)
 * @param {eq_T}[eq_]
 * @returns {sort_val_a__transition_a_frame_fn_T}
 */
export function sort_val_a__exit_a_frame_fn_(eq_ = eq) {
	/**
	 * @param sort_val_a{unknown[]}
	 */
	return sort_val_a=>{
		/** @type {number[]} */
		const idx_a = []
		/** @type {unknown[]} */
		const val_a = []
		if (sort_val_a) {
			const sort_val_a_length = sort_val_a.length
			for (let idx = 0; idx < sort_val_a.length; idx++) {
				const sort_val = sort_val_a[idx]
				const next_idx = idx + 1
				const next_sort_val = sort_val_a[next_idx]
				if (next_idx === sort_val_a_length || (
					eq_ ? !eq_([sort_val, next_sort_val])
						: sort_val !== next_sort_val)
				) {
					idx_a.push(idx)
					val_a.push(sort_val)
				}
			}
		}
		return { idx_a, val_a, }
	}
}
export {
	sort_val_a__exit_a_frame_fn_ as sort_val_a$exit_a_frame_fn_,
	sort_val_a__exit_a_frame_fn_ as exit_thold_a_compact_ctx_2,
	sort_val_a__exit_a_frame_fn_ as exit_thold_a1_compact_ctx_fn2,
	sort_val_a__exit_a_frame_fn_ as _exit_thold_a1_compact_ctx_fn,
	sort_val_a__exit_a_frame_fn_ as _fn__ctx__compact__a1__thold__exit,
}
