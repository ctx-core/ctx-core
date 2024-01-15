/// <reference types="../ensure__refresh/index.d.ts" />
import { clone } from '../clone/index.js'
/**
 * `ensure` `obj[key]` is present or call `ensure(obj)`. Then call `refresh(obj, obj[key])`.
 * @param {ensure_refresh__o_T}obj
 * @param {ensure__refresh_opts_T}ensure__refresh_opts_a
 * @returns {unknown}
 */
export function ensure__refresh(
	obj,
	...ensure__refresh_opts_a
) {
	if (!obj) return
	const refresh_ctx = clone(...ensure__refresh_opts_a)
	const { key, ensure, refresh } = refresh_ctx
	if (!obj[key]) {
		obj[key] = ensure(obj)
	}
	refresh(obj, obj[key])
	return obj[key]
}
export {
	ensure__refresh as ensure_refresh,
}
