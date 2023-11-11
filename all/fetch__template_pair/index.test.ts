import { restore, stub } from 'sinon'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { fetch__template_pair__new } from '../fetch__template_pair/index.js'
test.after.each(()=>{
	restore()
})
test('fetch__template_pair__new', async ()=>{
	const _stub = stub(globalThis, 'fetch')
	.withArgs('https://test.site/api?id=123')
	const [
		test__fetch,
		test__fetch2,
	] = fetch__template_pair__new<
		[id:number],
		{ foo:string },
		{ foo:string[] }
	>(id=>
			fetch(`https://test.site/api?id=${id}`),
		dehydrated=>({
			foo: [dehydrated.foo]
		}))
	_stub.resolves(new Response(JSON.stringify({
		foo: 'bar'
	}), {
		headers: {
			'Content-Type': 'application/json'
		}
	}))
	equal(
		await test__fetch(123).then(res=>res.json()),
		{ foo: 'bar' }
	)
	_stub.resolves(new Response(JSON.stringify({
		foo: 'bar'
	}), {
		headers: {
			'Content-Type': 'application/json'
		}
	}))
	const response_pair = await test__fetch2(123)
	equal(
		response_pair[0],
		{ foo: ['bar'] })
})
test.run()
