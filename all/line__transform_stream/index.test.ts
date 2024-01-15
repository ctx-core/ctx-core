import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { line__transform_stream_ } from '../line__transform_stream/index.js'
test('line__transform_stream_|!include_line_separator|callback', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('foo\n')
			controller.enqueue('bar\nbaz\n')
			controller.enqueue('\n')
		},
		pull(controller) {
			controller.enqueue('last line')
			controller.close()
		}
	})
	const line__transform_stream = line__transform_stream_()
	const reader = readable_stream.pipeThrough(line__transform_stream).getReader()
	equal(await reader.read(), { value: 'foo', done: false })
	equal(await reader.read(), { value: 'bar', done: false })
	equal(await reader.read(), { value: 'baz', done: false })
	equal(await reader.read(), { value: '', done: false })
	equal(await reader.read(), { value: 'last line', done: false })
	equal(await reader.read(), { value: undefined, done: true })
})
test('line__transform_stream_|include_line_separator|callback', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('foo\n')
			controller.enqueue('bar baz\r\n')
			controller.enqueue('quux\r')
		},
		pull(controller) {
			controller.enqueue('last line')
			controller.close()
		}
	})
	const line__transform_stream = line__transform_stream_({
		include_line_separator: true
	})
	const reader = readable_stream.pipeThrough(line__transform_stream).getReader()
	equal(await reader.read(), { value: 'foo\n', done: false })
	equal(await reader.read(), { value: 'bar baz\r\n', done: false })
	equal(await reader.read(), { value: 'quux\r', done: false })
	equal(await reader.read(), { value: 'last line', done: false })
	equal(await reader.read(), { value: undefined, done: true })
})
test.run()
