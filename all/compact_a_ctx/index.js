/// <reference types="../array_types/index.d.ts" />
/**
 * Returns a [sort_val_a__transition_a_frame_T](#sort_val_a__transition_a_frame_T)
 * @param {unknown[]}sparse_a
 * @returns {sort_val_a__transition_a_frame_T}
 */
export function compact_a_ctx_(sparse_a) {
	const idx_a = []
	const val_a = []
	for (let i = 0; i < sparse_a.length; i++) {
		const val = sparse_a[i]
		if (val != undefined) {
			idx_a.push(i)
			val_a.push(val)
		}
	}
	return { idx_a, val_a }
}
export {
	compact_a_ctx_ as compact_a1_ctx_fn,
	compact_a_ctx_ as _compact_a1_ctx,
}
