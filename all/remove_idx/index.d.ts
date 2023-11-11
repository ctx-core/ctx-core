/**
 * Remove `count = 1` items from `a` at position `idx`.
 */
export declare function remove_idx<
	I extends unknown = unknown, O extends unknown = readonly I[]
>(
	a:readonly I[], idx:number, count?:number
):O
export {
	remove_idx as remove__idx,
	remove_idx as remove__index,
}
