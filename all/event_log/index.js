import { be_memo_pair_ } from '../be_memo_pair/index.js'
import { be_sig_triple_ } from '../be_sig_triple/index.js'
const [
	,
	_event_log_,
	_event_log__set,
] = be_sig_triple_(()=>[])
export const [
	event_log$_,
	event_log_,
] = be_memo_pair_(ctx=>{
	if (_event_log_(ctx)?.length > event_log_limit_(ctx)) {
		_event_log_(ctx).splice(event_log_limit_(ctx))
	}
	return _event_log_(ctx).slice()
}, { id: 'event_log' })
export { event_log$_ as event_log__ }
export const [
	event_log_limit$_,
	event_log_limit_,
	event_log_limit__set
] = be_sig_triple_(()=>10000)
export { event_log_limit__set as event_log__set_limit, }
export function event_log__add(ctx, record) {
	_event_log__set(ctx, [record, ..._event_log_(ctx)])
}
