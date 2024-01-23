import { be_sig_triple_ } from '../be_sig_triple/index.js'
import { memo_ } from '../rmemo/index.js'
const [
	event_log$_,
	event_log_,
	event_log__set,
] = be_sig_triple_(
	()=>[],
	{ id: 'event_log' }
).add((ctx, event_log$)=>
	memo_(()=>{
		if (event_log$().length > event_log_limit_(ctx)) {
			event_log$().splice(event_log$().length - event_log_limit_(ctx) + 1)
		}
	}))
export {
	event_log$_,
	event_log_,
	event_log$_ as event_log__
}
export const [
	event_log_limit$_,
	event_log_limit_,
	event_log_limit__set
] = be_sig_triple_(()=>10000)
export { event_log_limit__set as event_log__set_limit, }
export function event_log__add(ctx, record) {
	event_log__set(ctx, [record, ...(event_log$_(ctx).val ?? [])])
}
