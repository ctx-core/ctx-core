/**
 * @param {Response}response
 * @param {(val:unknown)=>unknown}[hydrate]
 * @return {Promise<[Body, Response]>}
 */
export async function response_pair__new(
	response,
	hydrate = val=>val
) {
	const text = await response.text()
	const Content_Type = response.headers.get('Content-Type')
	if (!Content_Type || !~Content_Type.indexOf('application/json')) {
		return [hydrate(text), response]
	}
	try {
		return [hydrate(JSON.parse(text)), response]
	} catch (err) {
		console.error('response_pair__new|application/json|JSON.parse error:')
		console.error(response)
		console.error(text)
		throw err
	}
}
