import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { ctx__new } from '../ctx/index.js'
import { event_log_, event_log__add, event_log_limit_, event_log_limit__set } from './index.js'
test('event_log_', ()=>{
	const ctx = ctx__new()
	equal(event_log_(ctx), [])
	event_log__add(ctx, { msg: 'msg0' })
	equal(event_log_(ctx), [{ msg: 'msg0' }])
	event_log__add(ctx, { msg: 'msg1' })
	equal(event_log_(ctx), [{ msg: 'msg1' }, { msg: 'msg0' }])
	event_log__add(ctx, { msg: 'msg2' })
	equal(event_log_(ctx), [{ msg: 'msg2' }, { msg: 'msg1' }, { msg: 'msg0' }])
	event_log_limit__set(ctx, 2)
	equal(event_log_limit_(ctx), 2)
	equal(event_log_(ctx), [{ msg: 'msg2' }, { msg: 'msg1' }])
	event_log__add(ctx, { msg: 'msg3' })
	equal(event_log_(ctx), [{ msg: 'msg3' }, { msg: 'msg2' }])
})
test.run()
