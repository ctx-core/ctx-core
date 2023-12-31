import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { sleep } from '../sleep/index.js'
import { waitfor } from './index.js'
test('waitfor|success', async ()=>{
	let count = 0
	let ret = false
	const returned_value_a:boolean[] = []
	const promise = waitfor(()=>{
		count++
		return ret
	}, 10)
		.then(returned_value=>{
			returned_value_a.push(returned_value)
			return returned_value
		})
	equal(count, 1)
	equal(returned_value_a, [])
	ret = true
	equal(await promise, true)
	equal(count, 2)
	equal(returned_value_a, [true])
})
test('waitfor|timeout', async ()=>{
	let count = 0
	let err:Error|undefined = undefined
	try {
		await waitfor(()=>{
			count++
			return false
		}, 1)
	} catch (_err) {
		err = _err as Error
	}
	equal(count, 1)
	equal(err?.message, 'Timeout 1ms')
})
test('waitfor|cancel', async ()=>{
	let count = 0
	const promise = waitfor(()=>{
		count++
		return false
	}, 10)
	equal(count, 1)
	equal(await promise.cancel(), false)
	equal(count, 1)
	equal(await promise, false)
	equal(count, 1)
	count = 0
	const undefinable_promise = waitfor<boolean|undefined>(()=>{
		count++
		return false
	}, 10)
	equal(count, 1)
	equal(await undefinable_promise.cancel(undefined), undefined)
	equal(count, 1)
	equal(await undefinable_promise, undefined)
	equal(count, 1)
})
test('waitfor|period|number', async ()=>{
	let count = 0
	let ret = false
	const promise = waitfor(()=>{
		count++
		return ret
	}, 10, 2)
	try {
		equal(count, 1)
		await sleep(2)
		await sleep(0)
		equal(count, 2)
		await sleep(2)
		equal(count, 3)
		ret = true
		equal(await promise, true)
		equal(count, 4)
	} finally {
		await promise.cancel()
	}
})
test('waitfor|period|async function', async ()=>{
	let count = 0
	let ret = false
	const period_arg_aa:Promise<boolean>[][] = []
	const promise = waitfor(()=>{
		count++
		return ret
	}, 10, (...arg_a)=>{
		period_arg_aa.push(arg_a)
		return sleep(2)
	})
	try {
		equal(count, 1)
		await sleep(0)
		equal(period_arg_aa, [[promise]])
		await sleep(2)
		equal(count, 2)
		equal(period_arg_aa, [[promise], [promise]])
		await sleep(2)
		equal(count, 3)
		equal(period_arg_aa, [[promise], [promise], [promise]])
		ret = true
		equal(await promise, true)
		equal(count, 4)
		equal(period_arg_aa, [[promise], [promise], [promise]])
	} finally {
		await promise.cancel()
	}
})
test.run()
