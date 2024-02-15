export function json__parse(json) {
	if (json == null) return json
	try {
		return JSON.parse(json)
	} catch (err) {
		console.error(err)
		return null
	}
}
