import { be_memo_pair_ } from '../be_memo_pair/index.js'
import { NODE_ENV_ } from '../NODE_ENV/index.js'
export const [
	is_development$_,
	is_development_,
] = be_memo_pair_(ctx=>
	NODE_ENV_(ctx) === 'dev'
		|| NODE_ENV_(ctx) === 'development',
{ id: 'is_development' })
export { is_development$_ as is_development__ }
