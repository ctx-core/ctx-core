import { be_ } from '../be_/index.js'
import { be_arg_triple__new } from '../be_arg_triple/index.js'
/** @typedef {import('../be_/index.d.ts').be__params_T} */
/** @typedef {import('../be_/index.d.ts').Ctx} */
/** @typedef {import('../rmemo/index.d.ts').read_rmemo_T} */
/** @typedef {import('./index.d.ts').be_rmemo_pair_T} */
/**
 * @returns {be_rmemo_pair_T}
 * @private
 */
export function be_rmemo_pair_(...arg_a) {
	const [id, rmemo__new, be__params] =
		/** @type {[string, (ctx:Ctx)=>ReadableAtom, be__params_T]} */
		be_arg_triple__new(...arg_a)
	if (!rmemo__new) throw new Error('be_rmemo_pair_|rmemo__new argument is required')
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
			? _be_(id, rmemo__new, be__params)
			: _be_(rmemo__new, be__params)
	const val_ = ctx=>val$_(ctx)._
	return [
		val$_,
		val_,
	]
}
