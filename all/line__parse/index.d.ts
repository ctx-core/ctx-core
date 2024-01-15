import type { readable_stream_OR_reader_T } from '../readable_stream_OR_reader/index.js'
export declare function line__parse(
	readable_stream_or_reader:readable_stream_OR_reader_T,
	params?:line__parse__params_T
):AsyncIterable<string>
export declare function line__parse(
	on_line:line_iterator__on_line_T,
	readable_stream_or_reader:readable_stream_OR_reader_T,
	params?:line__parse__params_T
):void
export {
	line__parse as line_iterator_,
}
export interface line__parse__params_T {
	include_line_separator?:boolean
	text_decoder?:TextDecoder
}
export type line_iterator__on_line_T = (line:string)=>any
