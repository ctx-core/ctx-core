/// <reference types="ctx-core" />
import { id_be_sig_triple_ } from '../be_sig_triple/index.js'
import { import_meta_env_ } from '../import_meta_env/index.js'
export const [
	NODE_ENV$_,
	NODE_ENV_,
	NODE_ENV__set,
] = id_be_sig_triple_(
	'NODE_ENV',
	()=>
		import_meta_env_().NODE_ENV)
export {
	NODE_ENV$_ as NODE_ENV__,
	NODE_ENV$_ as b__NODE_ENV,
}
