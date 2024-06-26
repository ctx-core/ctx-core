import { id_be_sig_triple_ } from '../be_sig_triple/index.js'
import { import_meta_env_ } from '../import_meta_env/index.js'
export const [
	VERSION$_,
	VERSION_,
	VERSION__set,
] = id_be_sig_triple_(
	'VERSION',
	()=>
		typeof process === 'object'
		&& (import_meta_env_().VERSION || import_meta_env_().HEROKU_SLUG_COMMIT)
		|| Math.random().toString())
export { VERSION$_ as VERSION__ }
