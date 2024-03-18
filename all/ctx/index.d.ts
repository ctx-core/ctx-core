import type { ctx_T } from '../be_/index.js'
import type { TupleToUnion } from '../tuple/index.js'
export declare function ctx__new():ctx_T<''>
export { ctx__new as ctx_ }
export declare function ns_ctx__new<
	ns0_T extends string|ctx_T,
>(
	ns0:ns0_T,
):ctx_T<Exclude<TupleToUnion<ns_a__flat_T<[ns0_T]>>, undefined>>
export declare function ns_ctx__new<
	ns0_T extends string|ctx_T,
	ns1_T extends string|ctx_T,
>(
	ns0:ns0_T,
	ns1:ns1_T,
):ctx_T<Exclude<TupleToUnion<ns_a__flat_T<[ns0_T, ns1_T]>>, undefined>>
export declare function ns_ctx__new<
	ns0_T extends string|ctx_T,
	ns1_T extends string|ctx_T,
	ns2_T extends string|ctx_T,
>(
	ns0:ns0_T,
	ns1:ns1_T,
	ns2:ns2_T,
):ctx_T<Exclude<TupleToUnion<ns_a__flat_T<[ns0_T, ns1_T, ns2_T]>>, undefined>>
export declare function ns_ctx__new<
	ns0_T extends string|ctx_T,
	ns1_T extends string|ctx_T,
	ns2_T extends string|ctx_T,
	ns3_T extends string|ctx_T,
>(
	ns0:ns0_T,
	ns1:ns1_T,
	ns2:ns2_T,
	ns3:ns3_T,
):ctx_T<Exclude<TupleToUnion<ns_a__flat_T<[ns0_T, ns1_T, ns2_T, ns3_T]>>, undefined>>
export declare function ns_ctx__new<
	ns0_T extends string|ctx_T,
	ns1_T extends string|ctx_T,
	ns2_T extends string|ctx_T,
	ns3_T extends string|ctx_T,
	ns4_T extends string|ctx_T,
>(
	ns0:ns0_T,
	ns1:ns1_T,
	ns2:ns2_T,
	ns3:ns3_T,
	ns4:ns4_T,
):ctx_T<Exclude<TupleToUnion<ns_a__flat_T<[ns0_T, ns1_T, ns2_T, ns3_T, ns4_T]>>, undefined>>
export declare function ns_ctx__new<
	ns0_T extends string|ctx_T,
	ns1_T extends string|ctx_T,
	ns2_T extends string|ctx_T,
	ns3_T extends string|ctx_T,
	ns4_T extends string|ctx_T,
	ns5_T extends string|ctx_T,
>(
	ns0:ns0_T,
	ns1:ns1_T,
	ns2:ns2_T,
	ns3:ns3_T,
	ns4:ns4_T,
	ns5:ns5_T,
):ctx_T<Exclude<TupleToUnion<ns_a__flat_T<[ns0_T, ns1_T, ns2_T, ns3_T, ns4_T, ns5_T]>>, undefined>>
export declare function ns_ctx__new<
	ns0_T extends string|ctx_T,
	ns1_T extends string|ctx_T,
	ns2_T extends string|ctx_T,
	ns3_T extends string|ctx_T,
	ns4_T extends string|ctx_T,
	ns5_T extends string|ctx_T,
	ns6_T extends string|ctx_T,
>(
	ns0:ns0_T,
	ns1:ns1_T,
	ns2:ns2_T,
	ns3:ns3_T,
	ns4:ns4_T,
	ns5:ns5_T,
	ns6:ns6_T,
):ctx_T<Exclude<TupleToUnion<ns_a__flat_T<[ns0_T, ns1_T, ns2_T, ns3_T, ns4_T, ns5_T, ns6_T]>>, undefined>>
export declare function ns_ctx__new<
	ns0_T extends string|ctx_T,
	ns1_T extends string|ctx_T,
	ns2_T extends string|ctx_T,
	ns3_T extends string|ctx_T,
	ns4_T extends string|ctx_T,
	ns5_T extends string|ctx_T,
	ns6_T extends string|ctx_T,
	ns7_T extends string|ctx_T,
>(
	ns0:ns0_T,
	ns1:ns1_T,
	ns2:ns2_T,
	ns3:ns3_T,
	ns4:ns4_T,
	ns5:ns5_T,
	ns6:ns6_T,
	ns7:ns7_T,
):ctx_T<Exclude<TupleToUnion<ns_a__flat_T<[ns0_T, ns1_T, ns2_T, ns3_T, ns4_T, ns5_T, ns6_T, ns7_T]>>, undefined>>
export declare function ns_ctx__new<
	ns0_T extends string|ctx_T,
	ns1_T extends string|ctx_T,
	ns2_T extends string|ctx_T,
	ns3_T extends string|ctx_T,
	ns4_T extends string|ctx_T,
	ns5_T extends string|ctx_T,
	ns6_T extends string|ctx_T,
	ns7_T extends string|ctx_T,
	ns8_T extends string|ctx_T,
>(
	ns0:ns0_T,
	ns1:ns1_T,
	ns2:ns2_T,
	ns3:ns3_T,
	ns4:ns4_T,
	ns5:ns5_T,
	ns6:ns6_T,
	ns7:ns7_T,
	ns8:ns8_T,
):ctx_T<Exclude<TupleToUnion<ns_a__flat_T<[ns0_T, ns1_T, ns2_T, ns3_T, ns4_T, ns5_T, ns6_T, ns7_T, ns8_T]>>, undefined>>
export declare function ns_ctx__new<
	ns0_T extends string|ctx_T,
	ns1_T extends string|ctx_T,
	ns2_T extends string|ctx_T,
	ns3_T extends string|ctx_T,
	ns4_T extends string|ctx_T,
	ns5_T extends string|ctx_T,
	ns6_T extends string|ctx_T,
	ns7_T extends string|ctx_T,
	ns8_T extends string|ctx_T,
	ns9_T extends string|ctx_T,
>(
	ns0:ns0_T,
	ns1:ns1_T,
	ns2:ns2_T,
	ns3:ns3_T,
	ns4:ns4_T,
	ns5:ns5_T,
	ns6:ns6_T,
	ns7:ns7_T,
	ns8:ns8_T,
	ns9:ns9_T,
):ctx_T<Exclude<TupleToUnion<ns_a__flat_T<[ns0_T, ns1_T, ns2_T, ns3_T, ns4_T, ns5_T, ns6_T, ns7_T, ns8_T, ns9_T]>>, undefined>>
export { ns_ctx__new as ns_ctx_ }
export declare function is_ctx_(val:unknown):boolean
/**
 * Prepare for ns_union_T. Prevents type widening.
 */
type ns_a__flat_T<ns_a_T extends (string|ctx_T)[]> =
	ns_a_T extends []
		? []
		: ns_a_T extends [infer ns, ...infer tail extends (string|ctx_T)[]]
			? ns extends ctx_T
				? [ns['ns_T'], ...ns_a__flat_T<tail>]
				: [ns, ...ns_a__flat_T<tail>]
			: string[]
