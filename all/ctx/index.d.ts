import type { Ctx } from '../be_/index.js'
import type { TupleToUnion } from '../tuple/index.js'
export declare function ctx__new():Ctx<''>
export { ctx__new as ctx_ }
export declare function ns_ctx__new<ns0_T extends string|Ctx, ns_a_T extends (string|Ctx)[]>(
	ns0:ns0_T, ...ns_a:ns_a_T
):Ctx<Exclude<TupleToUnion<ns_a__flat_T<[ns0_T]>>|TupleToUnion<ns_a__flat_T<ns_a_T>>, undefined>>
export { ns_ctx__new as ns_ctx_ }
export declare function is_ctx_(val:unknown):boolean
/**
 * Prepare for ns_union_T. Prevents type widening.
 */
type ns_a__flat_T<ns_a_T extends (string|Ctx)[]> =
	ns_a_T extends []
		? []
		: ns_a_T extends [infer ns, ...infer tail extends (string|Ctx)[]]
			? ns extends Ctx
				? [ns['ns_T'], ...ns_a__flat_T<tail>]
				: [ns, ...ns_a__flat_T<tail>]
			: string[]
