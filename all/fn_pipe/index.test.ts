import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { fn_pipe } from '../fn_pipe/index.js'
test('fn_pipe|synchronous', ()=>{
	const o = {}
	is(o, fn_pipe(o, $=>$))
	equal({ foo: 'bar', o }, fn_pipe(o, $=>$, o=>({ foo: 'bar', o })))
})
test('fn_pipe|async', async ()=>{
	const o = { one: 1 }
	equal({ one: 1, foo: 'bar', baz: 'quux' },
		await fn_pipe(o, async ()=>({ ...o, foo: 'bar' }), $=>$.then($=>({ ...$, baz: 'quux' }))))
})
test.run()
