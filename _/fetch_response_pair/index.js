/// <reference types="../fetch/index.d.ts" />
/// <reference types="../fetch__template_pair/index.d.ts" />
import { response_pair__new } from '../response_pair/index.js'
/** @typedef {fetch_T} */
/**
 * @param {fetch_T}fetch
 * @returns {typeof fetch_response_pair__new}
 */
export function fetch_response_pair__new2(fetch) {
	return async (input, init)=>{
		const response = await fetch(input, init)
		return await response_pair__new(response)
	}
}
export const fetch_response_pair__new = fetch_response_pair__new2(globalThis.fetch)
