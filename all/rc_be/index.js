import { rc_be_ } from '../rc_be_/index.js'
/** @typedef {import('../be_/index.d.ts').Ctx} */
/** @typedef {import('../rc_be_/index.d.ts').rc_be__val__new_T} */
/**
 * @param {Ctx}ctx
 * @param {rc_be__val__new_T<NonNullable<unknown>>}key_or_val
 * @returns {NonNullable<unknown>}
 */
export function rc_be(
	ctx,
	val__new
) {
	return rc_be_(val__new)(ctx)
}
export { rc_be as rc_b, }
