/// <reference types="../line__parse/index.d.ts" />
/// <reference types="../readable_stream_OR_reader/index.d.ts" />
/**
 * @param {line_iterator__on_line_T|readable_stream_OR_reader_T}on_line_or_readable_stream_or_reader
 * @param {readable_stream_OR_reader_T|line__parse__params_T}[readable_stream_or_reader_or_params]
 * @param {line__parse__params_T}[params]
 * @returns {void|AsyncIterable<string>}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/read#example_2_-_handling_text_line_by_line}
 * @private
 */
export function line__parse(
	on_line_or_readable_stream_or_reader,
	readable_stream_or_reader_or_params,
	params
) {
	const on_line =
		typeof on_line_or_readable_stream_or_reader === 'function'
			? on_line_or_readable_stream_or_reader
			: null
	/** @type {readable_stream_OR_reader_T} */
	const readable_stream_or_reader =
		on_line
			? readable_stream_or_reader_or_params
			: on_line_or_readable_stream_or_reader
	if (!on_line) params = readable_stream_or_reader_or_params
	const text_decoder =
		params?.text_decoder
		?? new TextDecoder('utf-8')
	const include_line_separator =
		params?.include_line_separator
		?? false
	return (
		on_line
			? line__parse__iterator_().next().then($=>$.value)
			: line__parse__iterator_())
	async function* line__parse__iterator_() {
		/** @type {ReadableStreamDefaultReader|ReadableStreamBYOBReader} */
		const reader =
			(/** @type {ReadableStream} */readable_stream_or_reader).getReader
				? (/** @type {ReadableStream} */readable_stream_or_reader).getReader()
				: readable_stream_or_reader
		let {
			value: chunk,
			done: readerDone
		} = await reader.read()
		chunk =
			chunk
				? chunk.byteLength
					? text_decoder.decode(chunk, { stream: true })
					: chunk
				: ''
		const re = /\r\n|\n|\r/gm
		let startIndex = 0
		for (; ;) {
			let result = re.exec(chunk)
			if (!result) {
				if (readerDone) {
					break
				}
				let remainder = chunk.substring(startIndex);
				({ value: chunk, done: readerDone } = await reader.read())
				chunk =
					remainder
					+ (
						chunk
							? chunk.byteLength
								? text_decoder.decode(chunk, { stream: true })
								: chunk
							: '')
				startIndex = re.lastIndex = 0
				continue
			}
			const line = chunk.substring(
				startIndex,
				result.index + (include_line_separator ? result[0].length : 0))
			if (on_line) {
				on_line(line)
			} else {
				yield line
			}
			startIndex = re.lastIndex
		}
		if (startIndex < chunk.length) {
			// last line didn't end in a newline char
			let line = chunk.slice(startIndex)
			if (on_line) {
				on_line(line)
			} else {
				yield line
			}
		}
	}
}
export {
	line__parse as line_iterator_,
}
