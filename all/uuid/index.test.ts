import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { polyfill_uuid_, short_uuid_, uuid_, uuid__compact } from './index.js'
test('uuid_', ()=>{
	equal(
		uuid_().split('-').map(seg=>seg.length),
		[8, 4, 4, 4, 12])
})
test('short_uuid_', ()=>{
	equal(short_uuid_().length, 22)
})
test('uuid__compact', ()=>{
	const uuid = '8a88c23d-4a69-46ac-b975-1ab4590a470c'
	const expected_short_uuid = 'iojCPUppRqy5dRq0WQpHDA'
	equal(uuid__compact(uuid), expected_short_uuid)
	// verify the isomorphic solution is the same as nodejs
	equal(
		Buffer
			.from(uuid.replaceAll('-', ''), 'hex')
			.toString('base64')
			.replace(/==$/, ''),
		expected_short_uuid)
	equal(uuid__compact('8a88c23d4a6946acb9751ab4590a470c'), expected_short_uuid)
})
test('polyfill_uuid_', ()=>{
	equal(
		polyfill_uuid_().split('-').map(seg=>seg.length),
		[8, 4, 4, 4, 12])
})
test.run()
