/**
 * @param {AsyncGenerator<unknown>}async_iter
 * @returns {Promise<unknown[]>}
 */
export async function async_gen_a_(async_iter) {
	const async_gen_a = []
	for await (const $ of async_iter) async_gen_a.push($)
	return async_gen_a
}
