import { id_be_memo_pair_ } from '../be_memo_pair/index.js'
import { NODE_ENV_ } from '../NODE_ENV/index.js'
export const [
	is_staging$_,
	is_staging_,
] = id_be_memo_pair_(
	'is_staging',
	ctx=>
		NODE_ENV_(ctx) === 'staging')
export {
	is_staging$_ as is_staging__,
	is_staging$_ as b__is__staging,
}
