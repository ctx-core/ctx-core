/// <reference types="../be_/index.d.ts" />
/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { be_ } from '../be_/index.js'
import { sig_ } from '../rmemo/index.js'
/**
 * @param {Be<sig_T>|be__val__new_T<unknown>}be_OR_val__new
 * @param {be_config_T}[config]
 * @returns {be_sig_triple_T}
 * @private
 */
export function be_sig_triple_(
	be_OR_val__new,
	config
) {
	let add_def_a = []
	/** @ype {Be<sig_T>} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(ctx=>
				add_def_a.reduce(
					(sig, add_def)=>sig.add((...arg_a)=>add_def(ctx, ...arg_a)),
					sig_(be_OR_val__new(ctx))),
			config)
	let be_sig_triple = [
		be,
		ctx=>be(ctx)(),
		(ctx, val)=>{
			be(ctx)._ = val
		},
	]
	be_sig_triple.add = add_def=>{
		add_def_a.push(add_def)
		return be_sig_triple
	}
	return be_sig_triple
}
