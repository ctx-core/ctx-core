/// <reference types="../be_/index.d.ts" />
import { be_ } from '../be_/index.js'
/**
 * @param {Ctx}ctx
 * @param {be__val__new_T}val_
 * @returns {NonNullable<unknown>}
 */
export function be(ctx, val_) {
	return be_(val_)(ctx)
}
export { be as b, }
