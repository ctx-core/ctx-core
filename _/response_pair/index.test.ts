import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { response_pair__new } from '../response_pair/index.js'
test('response_pair__new|no Content-Type header', async ()=>{
	const body = 'the body'
	const response = new Response(body, { headers: new Headers({}) })
	equal([body, response], await response_pair__new(response))
})
test('response_pair__new|Content-Type|text/html', async ()=>{
	const body = '<html><body>the body</body></html>'
	const response = new Response(body, {
		headers: new Headers({ 'Content-Type': 'text/html' })
	})
	equal([body, response], await response_pair__new(response))
})
test('response_pair__new|Content-Type|application/json', async ()=>{
	const body = { foo: 'bar ' }
	const response = new Response(JSON.stringify(body), {
		headers: new Headers({ 'Content-Type': 'application/json' })
	})
	equal([body, response], await response_pair__new(response))
})
test('response_pair__new|Content-Type|application/json; charset=utf8', async ()=>{
	const body = { foo: 'bar ' }
	const response = new Response(JSON.stringify(body), {
		headers: new Headers({ 'Content-Type': 'application/json; charset=utf8' })
	})
	equal([body, response], await response_pair__new(response))
})
test.run()
