import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { run } from '../run/index.js'
import { sleep } from '../sleep/index.js'
import { Timeout } from '../timeout/index.js'
import { timeout_promise } from './index.js'
test('timeout_promise|success', async ()=>{
	let count = 0
	const promise = timeout_promise(run(async ()=>{
		count++
		await sleep(10)
		return true
	}), 100)
	equal(count, 1)
	equal(await promise, true)
	equal(count, 1)
})
test('timeout_promise|timeout', async ()=>{
	let count = 0
	let err:Error|undefined = undefined
	try {
		await timeout_promise(run(async ()=>{
			count++
			await sleep(10)
			return false
		}), 1)
	} catch (_err) {
		err = _err as Error
	}
	equal(count, 1)
	equal(err instanceof Timeout, true)
	equal(err?.message, 'Timeout 1ms')
})
test('timeout_promise|cancel|arg', async ()=>{
	const promise = timeout_promise(
		new Promise<number>(()=>{}),
		1000)
	promise.cancel(5)
	equal(await promise, 5)
})
test.run()
