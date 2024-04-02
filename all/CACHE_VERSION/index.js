/// <reference types="ctx-core" />
import { id_be_sig_triple_ } from '../be_sig_triple/index.js'
import { import_meta_env_ } from '../import_meta_env/index.js'
export const [
	CACHE_VERSION$_,
	CACHE_VERSION_,
	CACHE_VERSION__set,
] = /** @type {be_sig_triple_T<false|string>} */
id_be_sig_triple_(
	'CACHE_VERSION',
	()=>
		typeof process === 'object' && import_meta_env_().CACHE_VERSION)
export {
	CACHE_VERSION$_ as CACHE_VERSION__,
	CACHE_VERSION$_ as b__CACHE_VERSION,
}
