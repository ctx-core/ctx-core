import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { run_pipe } from '../run_pipe/index.js'
test('run_pipe|synchronous', ()=>{
	const o = {}
	is(o, run_pipe(()=>o, $=>$))
	equal({ foo: 'bar', o }, run_pipe(()=>o, $=>$, o=>({ foo: 'bar', o })))
})
test('run_pipe|async', async ()=>{
	const o = { one: 1 }
	equal({ one: 1, foo: 'bar', baz: 'quux' },
		await run_pipe(
			()=>o,
			async ()=>({ ...o, foo: 'bar' }),
			$=>
				$.then($=>
					({ ...$, baz: 'quux' }))))
})
test.run()
