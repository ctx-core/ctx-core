import { assign } from '../assign/index.js'
export function ContentType_json_headers_() {
	return assign({
		'Content-Type': 'application/json'
	}, ...arguments)
}
export {
	ContentType_json_headers_ as _ContentType_json_headers,
	ContentType_json_headers_ as _ContentType__json,
}
