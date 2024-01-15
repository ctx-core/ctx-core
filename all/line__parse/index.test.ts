import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { line__parse } from '..//line__parse/index.js'
test('line__parse|!include_line_separator|callback', async ()=>{
	const text_encoder = new TextEncoder()
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue(text_encoder.encode('foo\n'))
			controller.enqueue('bar\nbaz\n')
			controller.enqueue(text_encoder.encode('\n'))
		},
		pull(controller) {
			controller.close()
		}
	})
	const line_a:string[] = []
	await line__parse(
		line=>line_a.push(line),
		readable_stream)
	equal(line_a, [
		'foo',
		'bar',
		'baz',
		'',
	])
})
test('line__parse|include_line_separator|callback', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('foo\n')
			controller.enqueue('bar baz\r\n')
			controller.enqueue('quux\r')
		},
		pull(controller) {
			controller.close()
		}
	})
	const line_a:string[] = []
	await line__parse(
		line=>line_a.push(line),
		readable_stream,
		{ include_line_separator: true })
	equal(line_a, [
		'foo\n',
		'bar baz\r\n',
		'quux\r',
	])
})
test('line__parse|!include_line_separator|iterator', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('foo\n')
			controller.enqueue('bar baz\n')
			controller.enqueue('\n')
			controller.enqueue(null)
		},
		pull(controller) {
			controller.close()
		}
	})
	const line_a:string[] = []
	for await (const line of line__parse(readable_stream)) {
		line_a.push(line)
	}
	equal(line_a, [
		'foo',
		'bar baz',
		'',
	])
})
test('line__parse|!include_line_separator|iterator', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('foo\n')
			controller.enqueue('bar baz\n')
			controller.enqueue('\n')
			controller.enqueue(null)
		},
		pull(controller) {
			controller.close()
		}
	})
	const line_a:string[] = []
	for await (const line of line__parse(
		readable_stream,
		{ include_line_separator: true }
	)) {
		line_a.push(line)
	}
	equal(line_a, [
		'foo\n',
		'bar baz\n',
		'\n',
	])
})
test.run()
