/** @typedef {import('../line__transform_stream/index.d.ts').line__transform_stream___params_T} */
/**
 * @param {line__transform_stream___params_T}[params]
 * @param {QueuingStrategy<string>}[writable_strategy]
 * @param {QueuingStrategy<string>}[readable_strategy]
 * @returns {TransformStream<string, string>}
 * @private
 */
export function line__transform_stream_(
	params = {},
	writable_strategy,
	readable_strategy,
) {
	/** @type {string} */
	let chunk = ''
	const re = /\r\n|\n|\r/gm
	return new TransformStream(
		{
			transform(
				arg__chunk,
				controller
			) {
				chunk += arg__chunk
				let startIndex = 0
				for (; ;) {
					const result = re.exec(chunk)
					if (!result) {
						if (startIndex) {
							chunk = chunk.substring(startIndex)
						}
						re.lastIndex = 0
						return
					}
					const line =
						chunk.substring(
							startIndex,
							result.index
							+ (params.include_line_separator ? result[0].length : 0))
					controller.enqueue(line)
					startIndex = re.lastIndex
				}
			},
			flush(controller) {
				if (chunk.length) {
					controller.enqueue(chunk)
					chunk = ''
				}
				controller.terminate()
			}
		},
		writable_strategy,
		readable_strategy)
}
