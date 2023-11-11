import { response_pair__new } from '../response_pair/index.js'
/** @typedef {import('../fetch__template_pair/index.d.ts').fetch__template_pair_T}fetch__template_pair_T */
/**
 * @param {(...arg_a:any[])=>Promise<Response>}fetch_fn
 * @param {(val:unknown)=>unknown}[hydrate]
 * @returns {fetch__template_pair_T}
 * @private
 */
export function fetch__template_pair__new(
	fetch_fn,
	hydrate = val=>val
) {
	return [
		fetch_fn,
		(...arg_a)=>
			fetch_fn(...arg_a)
				.then(response=>
					response_pair__new(response, hydrate))
	]
}
