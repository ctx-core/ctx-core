/// <reference lib="dom" />
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { TextDecoderStream } from './index.js'
test('TestDecoderStream', async ()=>{
	const encoder = new TextEncoder()
	const encoded = encoder.encode('foo\nbar\nbaz')
	let decoded = ''
	const stream = new ReadableStream({
		start(controller) {
			controller.enqueue(encoded)
			controller.close()
		}
	})
		.pipeThrough(new TextDecoderStream())
		.pipeTo(new WritableStream({
			write(chunk) {
				decoded += chunk
			},
		}))
	await stream
	equal(decoded, 'foo\nbar\nbaz')
})
test.run()
