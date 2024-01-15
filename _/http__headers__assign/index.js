import { assign } from '../assign/index.js'
export function http__headers__assign(ctx, ...header_a) {
	const headers = ctx.headers || {}
	assign(headers, ...header_a)
	ctx.headers = headers
	return ctx
}
export {
	http__headers__assign as assign_http_headers,
	http__headers__assign as assign__headers__http,
}
