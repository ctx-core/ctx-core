import { be_ } from '../be_/index.js'
/**
 * @param {import('../be_/index.js').Ctx}ctx
 * @param {import('../be_/index.js').be__val__new_T}val_
 * @returns {NonNullable<unknown>}
 */
export function be(ctx, val_) {
	return be_(val_)(ctx)
}
export { be as b, }
