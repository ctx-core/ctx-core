export declare function line__transform_stream_(
	params?:line__transform_stream___params_T,
	writable_strategy?:QueuingStrategy<string>,
	readable_strategy?:QueuingStrategy<string>
):TransformStream<string, string>
export interface line__transform_stream___params_T {
	include_line_separator?:boolean
}