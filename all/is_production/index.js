import { be_memo_pair_ } from '../be_memo_pair/index.js'
import { NODE_ENV_ } from '../NODE_ENV/index.js'
export const [
	is_production$_,
	is_production_,
] = be_memo_pair_(ctx=>
	NODE_ENV_(ctx) === 'prod' || NODE_ENV_(ctx) === 'production',
{ id: 'is_production' })
export {
	is_production$_ as is_production__,
	is_production$_ as b__is__production,
}
