import { assign } from '../assign/index.js'
export function CacheControl_1hour_headers_() {
	return assign({
		'Cache-Control': 'public, max-age=3600'
	}, ...arguments)
}
export {
	CacheControl_1hour_headers_ as _CacheControl_1hour_headers,
	CacheControl_1hour_headers_ as _CacheControl__1hour,
}
