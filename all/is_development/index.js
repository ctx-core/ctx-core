import { id_be_memo_pair_ } from '../be_memo_pair/index.js'
import { NODE_ENV_ } from '../NODE_ENV/index.js'
export const [
	is_development$_,
	is_development_,
] = id_be_memo_pair_(
	'is_development',
	ctx=>
		NODE_ENV_(ctx) === 'dev'
		|| NODE_ENV_(ctx) === 'development')
export { is_development$_ as is_development__ }
