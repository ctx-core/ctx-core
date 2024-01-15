import { assign } from '../assign/index.js'
export function CacheControl_5min_headers_() {
	return assign({
		'Cache-Control': 'public, max-age=300'
	}, ...arguments)
}
export {
	CacheControl_5min_headers_ as _CacheControl_5min_headers,
	CacheControl_5min_headers_ as _CacheControl__5min,
}
