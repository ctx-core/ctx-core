import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { sig_ } from '../rmemo/index.js'
import { rmemo__wait } from './index.js'
test('rmemo__wait|rmemo', async ()=>{
	const subject$ = sig_(-1)
	const promise = rmemo__wait(
		subject$,
		subject=>subject >= 0,
		10_000)
	// equal(promise.m.t, [])
	equal(subject$(), -1)
	subject$._ = 1
	equal(subject$(), 1)
	await promise
	equal(subject$(), 1)
})
test('rmemo__wait|rmemolike', async ()=>{
	const subject$ = sig_(-1)
	const promise = rmemo__wait(
		()=>subject$(),
		subject=>subject >= 0,
		10_000)
	// equal(promise.m.t, [])
	equal(subject$(), -1)
	subject$._ = 1
	equal(subject$(), 1)
	await promise
	equal(subject$(), 1)
})
test('rmemo__wait|cancel', async ()=>{
	const subject$ = sig_(-1)
	const promise = rmemo__wait(
		subject$,
		subject=>subject >= 0,
		10_000)
	promise.cancel(500)
	equal(await promise, 500)
})
test.run()
