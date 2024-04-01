import { id_be_memo_pair_ } from '../be_memo_pair/index.js'
import { NODE_ENV_ } from '../NODE_ENV/index.js'
export const [
	is_production$_,
	is_production_,
] = id_be_memo_pair_(
	'is_production',
	ctx=>
		NODE_ENV_(ctx) === 'prod'
		|| NODE_ENV_(ctx) === 'production')
export {
	is_production$_ as is_production__,
	is_production$_ as b__is__production,
}
