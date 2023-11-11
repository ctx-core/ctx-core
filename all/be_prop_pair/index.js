import { be_, ctx__set } from '../be_/index.js'
/** @typedef {import('../be_/index.d.ts').be__params_T}be__params_T */
/** @typedef {import('../be_/index.d.ts').Ctx}Ctx */
/** @typedef {import('../be_prop_pair/index.d.ts').be_prop_pair_T}be_prop_pair_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>unknown)|be__params_T}[id_OR_val__new_OR_be__params]
 * @param {((ctx:Ctx)=>unknown)|be__params_T}val__new_OR_be__params
 * @param {be__params_T}[be__params]
 * @returns {be_prop_pair_T}
 * @private
 */
export function be_prop_pair_(
	id_OR_val__new_OR_be__params,
	val__new_OR_be__params,
	be__params
) {
	/** @type {string} */
	let id
	/** @type {(ctx:Ctx)=>unknown} */
	let val__new
	if (typeof id_OR_val__new_OR_be__params === 'function') {
		val__new_OR_be__params = id_OR_val__new_OR_be__params
	} else if (typeof id_OR_val__new_OR_be__params === 'object') {
		be__params = id_OR_val__new_OR_be__params
	} else {
		id = id_OR_val__new_OR_be__params
	}
	if (typeof val__new_OR_be__params === 'function') {
		val__new = val__new_OR_be__params
	} else if (!be__params) {
		be__params = val__new_OR_be__params
	}
	if (!val__new) {
		val__new = ()=>null
	}
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val_ =
		id
			? _be_(id, val__new, be__params)
			: _be_(val__new, be__params)
	function val__set(ctx, val) {
		ctx__set(
			ctx,
			val_,
			val,
			be__params && be__params.is_source_)
	}
	return [
		val_,
		val__set
	]
}
