export declare type l1a_T<Val> = [Val]
export declare type rl1a_T<Val> = readonly [Val]
export declare type l2a_T<Val> = [...l1a_T<Val>, Val]
export declare type rl2a_T<Val> = readonly [...l1a_T<Val>, Val]
export declare type l3a_T<Val> = [...l2a_T<Val>, Val]
export declare type rl3a_T<Val> = readonly [...l2a_T<Val>, Val]
export declare type l4a_T<Val> = [...l3a_T<Val>, Val]
export declare type rl4a_T<Val> = readonly [...l3a_T<Val>, Val]
export declare type l5a_T<Val> = [...l4a_T<Val>, Val]
export declare type rl5a_T<Val> = readonly [...l4a_T<Val>, Val]
export declare type l6a_T<Val> = [...l5a_T<Val>, Val]
export declare type rl6a_T<Val> = readonly [...l5a_T<Val>, Val]
export declare type l7a_T<Val> = [...l6a_T<Val>, Val]
export declare type rl7a_T<Val> = readonly [...l6a_T<Val>, Val]
export declare type l8a_T<Val> = [...l7a_T<Val>, Val]
export declare type rl8a_T<Val> = readonly [...l7a_T<Val>, Val]
export declare type l9a_T<Val> = [...l8a_T<Val>, Val]
export declare type rl9a_T<Val> = readonly [...l8a_T<Val>, Val]
export declare type l10a_T<Val> = [...l9a_T<Val>, Val]
export declare type rl10a_T<Val> = readonly [...l9a_T<Val>, Val]
export declare type l20a_T<Val> = [...l10a_T<Val>, ...l10a_T<Val>]
export declare type rl20a_T<Val> = readonly [...l10a_T<Val>, ...l10a_T<Val>]
export declare type l30a_T<Val> = [...l20a_T<Val>, ...l10a_T<Val>]
export declare type rl30a_T<Val> = readonly [...l20a_T<Val>, ...l10a_T<Val>]
export declare type l40a_T<Val> = [...l30a_T<Val>, ...l10a_T<Val>]
export declare type rl40a_T<Val> = readonly [...l30a_T<Val>, ...l10a_T<Val>]
export declare type l50a_T<Val> = [...l40a_T<Val>, ...l10a_T<Val>]
export declare type rl50a_T<Val> = readonly [...l40a_T<Val>, ...l10a_T<Val>]
export declare type l100a_T<Val> = [...l50a_T<Val>, ...l50a_T<Val>]
export declare type rl100a_T<Val> = readonly [...l50a_T<Val>, ...l50a_T<Val>]
export declare type l200a_T<Val> = [...l100a_T<Val>, ...l100a_T<Val>]
export declare type rl200a_T<Val> = readonly [...l100a_T<Val>, ...l100a_T<Val>]
export declare type l300a_T<Val> = [...l200a_T<Val>, ...l100a_T<Val>]
export declare type rl300a_T<Val> = readonly [...l200a_T<Val>, ...l100a_T<Val>]
export declare type l400a_T<Val> = [...l300a_T<Val>, ...l100a_T<Val>]
export declare type rl400a_T<Val> = readonly [...l300a_T<Val>, ...l100a_T<Val>]
export declare type l500a_T<Val> = [...l400a_T<Val>, ...l100a_T<Val>]
export declare type rl500a_T<Val> = readonly [...l400a_T<Val>, ...l100a_T<Val>]
export declare type l1000a_T<Val> = [...l500a_T<Val>, ...l500a_T<Val>]
export declare type rl1000a_T<Val> = readonly [...l500a_T<Val>, ...l500a_T<Val>]
export declare type a1_T<A extends any[]> = A
export declare type ra1_T<A extends readonly any[]> = A
export declare type a2_T<A extends any[]> = a1_T<A>
export declare type ra2_T<A extends readonly any[]> = ra1_T<A>
export declare type a3_T<A extends any[]> = a2_T<A>
export declare type ra3_T<A extends readonly any[]> = ra2_T<A>
export declare type a4_T<A extends any[]> = a3_T<A>
export declare type ra4_T<A extends readonly any[]> = ra3_T<A>
export declare type a5_T<A extends any[]> = a4_T<A>
export declare type ra5_T<A extends readonly any[]> = ra4_T<A>
export declare type a6_T<A extends any[]> = a5_T<A>
export declare type ra6_T<A extends readonly any[]> = ra5_T<A>
export declare type a7_T<A extends any[]> = a6_T<A>
export declare type ra7_T<A extends readonly any[]> = ra6_T<A>
export declare type a8_T<A extends any[]> = a7_T<A>
export declare type ra8_T<A extends readonly any[]> = ra7_T<A>
export declare type a9_T<A extends any[]> = a8_T<A>
export declare type ra9_T<A extends readonly any[]> = ra8_T<A>
export declare type a10_T<A extends any[]> = a9_T<A>
export declare type ra10_T<A extends readonly any[]> = ra9_T<A>
export declare type a20_T<A extends any[]> = a10_T<a10_T<A>>
export declare type ra20_T<A extends readonly any[]> = ra10_T<ra10_T<A>>
export declare type a30_T<A extends any[]> = a20_T<a10_T<A>>
export declare type ra30_T<A extends readonly any[]> = ra20_T<ra10_T<A>>
export declare type a40_T<A extends any[]> = a30_T<a10_T<A>>
export declare type ra40_T<A extends readonly any[]> = ra30_T<ra10_T<A>>
export declare type a50_T<A extends any[]> = a40_T<a10_T<A>>
export declare type ra50_T<A extends readonly any[]> = ra40_T<ra10_T<A>>
export declare type a100_T<A extends any[]> = a50_T<a50_T<A>>
export declare type ra100_T<A extends readonly any[]> = ra50_T<ra50_T<A>>
export declare type a200_T<A extends any[]> = a100_T<a100_T<A>>
export declare type ra200_T<A extends readonly any[]> = ra100_T<ra100_T<A>>
export declare type a300_T<A extends any[]> = a200_T<a100_T<A>>
export declare type ra300_T<A extends readonly any[]> = ra200_T<ra100_T<A>>
export declare type a400_T<A extends any[]> = a300_T<a100_T<A>>
export declare type ra400_T<A extends readonly any[]> = ra300_T<ra100_T<A>>
export declare type a500_T<A extends any[]> = a400_T<a100_T<A>>
export declare type ra500_T<A extends readonly any[]> = ra400_T<ra100_T<A>>
export declare type a1000_T<A extends any[]> = a500_T<a500_T<A>>
export declare type ra1000_T<A extends readonly any[]> = ra500_T<ra500_T<A>>
/**
 * `ctx` of values & indices.
 */
export interface sort_val_a__transition_a_frame_T<I> {
	idx_a:number[]
	val_a:I[]
}
export declare type sort_val_a$transition_a_frame_T<I> = sort_val_a__transition_a_frame_T<I>
export declare type compact_a_ctx_I<I> = sort_val_a__transition_a_frame_T<I>
export declare type compact_a1_ctx_I<I> = sort_val_a__transition_a_frame_T<I>
export declare type compare_1_T<
	Val extends unknown = unknown
> = (val:Val, idx?:number)=>number
export declare type compare_T<
	I extends unknown = unknown
> = (a:I, b:I)=>number
export declare type is_match__T<
	Val extends unknown = unknown
> = (in_value:Val, idx:number)=>boolean
export declare type is_match_fn_T<Val extends unknown = unknown> = is_match__T<Val>
export declare type _is_match_T<Val extends unknown = unknown> = is_match__T<Val>
export declare type _is_match_type<Val extends unknown = unknown> = is_match__T<Val>
export declare type item_key_idx_val_fn_T<
	Val extends unknown = unknown,
	Obj extends Record<string, Val> = Record<string, Val>
> = (val:Val, item:Obj, key:string|number, idx:number)=>string
export declare type _item_key_idx_val_T<
	Val extends unknown = unknown,
	Obj extends Record<string, Val> = Record<string, Val>
> = item_key_idx_val_fn_T<Val, Obj>
export declare type _item_key_idx_val_type<
	Val extends unknown = unknown,
	Obj extends Record<string, Val> = Record<string, Val>
> = item_key_idx_val_fn_T<Val, Obj>
export declare type sort_idx_ctx__T<I extends unknown = unknown> = (
	a:readonly I[])=>sort_idx_o_T<I>
export declare type sort_idx_ctx_2_T<I extends unknown = unknown> = sort_idx_ctx__T<I>
export declare type sort_idx_ctx_a1_fn_type<I extends unknown = unknown> = sort_idx_ctx__T<I>
export declare type fn__a1__ctx__idx__sort<I extends unknown = unknown> = sort_idx_ctx__T<I>
export interface sort_idx_o_T<I extends unknown = unknown> {
	sort_idx_a:readonly number[]
	sort_val_a:I[]
}
export declare type sort_idx_ctx_T<I extends unknown = unknown> = sort_idx_o_T<I>
export declare type ctx__idx__sort<I extends unknown = unknown> = sort_idx_o_T<I>
export declare type sort_val_a__transition_a_frame_fn_T<
	I extends unknown = unknown
> = (in_val_a:readonly I[]|undefined)=>sort_val_a__transition_a_frame_T<I>
export declare type sort_val_a$transition_a_frame_fn_T<I extends unknown = unknown> =
	sort_val_a__transition_a_frame_T<I>
export declare type thold_a_compact_ctx__T<I extends unknown = unknown> =
	sort_val_a__transition_a_frame_fn_T<I>
export declare type thold_a1_compact_ctx_fn_type<I extends unknown = unknown> =
	sort_val_a__transition_a_frame_fn_T<I>
