export type readable_stream_OR_reader_T =
	{ getReader():ReadableStreamDefaultReader<any> }
	|ReadableStreamDefaultReader
	|ReadableStreamBYOBReader
export type readable_stream_or_reader_T = readable_stream_OR_reader_T
export declare type readable_reader_T = readable_stream_OR_reader_T
export declare type line_iterator__readable_reader_T = readable_stream_OR_reader_T
