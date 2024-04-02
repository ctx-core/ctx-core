/// <reference types="../be_/index.d.ts" />
import { be_ } from '../be_/index.js'
/**
 * @param {ctx_T}ctx
 * @param {be__val__new_T}val_
 * @param {be_config_T}[config]
 * @returns {NonNullable<unknown>}
 */
export function be(ctx, val_, config) {
	return be_(val_, config)(ctx)
}
export { be as b, }
/**
 * @param {ctx_T}ctx
 * @param {string}id
 * @param {be__val__new_T}val_
 */
export function id_be(ctx, id, val_) {
	return be(ctx, val_, { id })
}
/**
 * @param {ctx_T}ctx
 * @param {string}ns
 * @param {be__val__new_T}val_
 */
export function ns_be(ctx, ns, val_) {
	return be(ctx, val_, { ns })
}
/**
 * @param {ctx_T}ctx
 * @param {string}ns
 * @param {string}id
 * @param {be__val__new_T}val_
 */
export function ns_id_be(ctx, ns, id, val_) {
	return be(ctx, val_, { ns, id })
}
