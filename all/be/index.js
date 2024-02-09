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
