/// <reference lib="dom" />
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { TextEncoderStream } from './index.js'
test('TestEncoderStream', async ()=>{
	const decoded = 'foo\nbar\nbaz'
	let uint8:Uint8Array|undefined = undefined
	const stream = new ReadableStream({
		start(controller) {
			controller.enqueue(decoded)
			controller.close()
		}
	})
		.pipeThrough(new TextEncoderStream())
		.pipeTo(new WritableStream({
			write(chunk) {
				uint8 = chunk
			},
		}))
	await stream
	const decoder = new TextDecoder()
	equal(decoder.decode(uint8), 'foo\nbar\nbaz')
})
test.run()
