import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { hex__base64_ } from './index.js'
test('hex__base64_', ()=>{
	const uuid = '8a88c23d4a6946acb9751ab4590a470c'
	const expected_b64 = 'iojCPUppRqy5dRq0WQpHDA=='
	equal(hex__base64_(uuid), expected_b64)
	// verify the isomorphic solution is the same as nodejs
	equal(
		Buffer
			.from(uuid.replaceAll('-', ''), 'hex')
			.toString('base64'),
		expected_b64)
})
test.run()
