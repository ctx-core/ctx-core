import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { sig_ } from '../rmemo/index.js'
import { rmemo__wait } from './index.js'
test('rmemo__wait', async ()=>{
	const subject$ = sig_(-1)
	const promise = rmemo__wait(
		subject$,
		subject=>subject >= 0,
		10_000)
	equal(promise.m.memor, [])
	equal(subject$(), -1)
	subject$._ = 1
	equal(subject$(), 1)
	await promise
	equal(subject$(), 1)
})
test.run()
