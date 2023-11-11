import { rc_be_ } from '../rc_be_/index.js'
/** @typedef {import('../be_/index.d.ts').Ctx}Ctx */
/** @typedef {import('../rc_be_/index.d.ts').rc_be__val__T}rc_be__val__T */
/**
 * @param {Ctx}ctx
 * @param {string|rc_be__val__T<NonNullable<unknown>>}key_or_val
 * @param {rc_be__val__T<NonNullable<unknown>>}[val_]
 * @returns {NonNullable<unknown>}
 */
export function rc_be(
	ctx,
	key_or_val,
	val_
) {
	return val_ ? rc_be_(key_or_val, val_)(ctx) : rc_be_(key_or_val)(ctx)
}
export { rc_be as rc_b, }
