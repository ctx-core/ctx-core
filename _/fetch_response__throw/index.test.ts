import { Buffer } from 'buffer'
import { test } from 'uvu'
import { equal, unreachable } from 'uvu/assert'
import { fetch_response__throw } from '../fetch_response__throw/index.js'
import type { HttpError } from '../http_error/index.js'
test('fetch_response__throw', async ()=>{
	const error_msg = 'the error message'
	const buffer = Buffer.from(error_msg)
	const response = new Response(buffer, { status: 501 })
	try {
		await fetch_response__throw(response)
		unreachable('should have thrown')
	} catch (_err) {
		const err = _err as HttpError
		equal(err.http__status, 501)
		equal(err.message, error_msg)
	}
})
test.run()
