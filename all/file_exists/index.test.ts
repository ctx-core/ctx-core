import { build } from 'esbuild'
import { unlink, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { tempfile_path_ } from '../tempfile_path/index.js'
import { file_exists_ as browser_file_exists_, file_exists__waitfor as browser_file_exists__waitfor } from './index.browser.js'
import { file_exists_, file_exists__waitfor } from './index.js'
test('file_exists_ + file_exists__waitfor|server', async ()=>{
	const tempfile_path = await tempfile_path_()
	equal(await file_exists_(tempfile_path), false)
	await writeFile(tempfile_path, 'test content')
	try {
		equal(await file_exists__waitfor(tempfile_path), true)
		equal(await file_exists_(tempfile_path), true)
	} finally {
		await unlink(tempfile_path)
	}
})
test('file_exists__waitfor|bun error', async ()=>{
	let count = 0
	await file_exists__waitfor(()=>{
		++count
		if (count < 5) throw Error('error: ENOENT reading /some/file.js')
		return true
	})
})
test('file_exists__waitfor|server|cancel', async ()=>{
	const tempfile_path = await tempfile_path_()
	equal(await file_exists_(tempfile_path), false)
	const promise= file_exists__waitfor(tempfile_path)
	let rv:boolean|undefined = undefined
	promise.then(_rv=>rv = _rv)
	equal(rv, undefined)
	equal(await promise.cancel(), false)
	equal(await promise, false)
	rv = undefined
	const arg_promise= file_exists__waitfor(tempfile_path)
	promise.then(_rv=>rv = _rv)
	equal(rv, undefined)
	equal(await arg_promise.cancel(true), true)
	equal(await arg_promise, true)
})
test('file_exists_ + file_exists__waitfor|browser', async ()=>{
	const tempfile_path = await tempfile_path_()
	equal(await browser_file_exists_(tempfile_path), false)
	await writeFile(tempfile_path, 'test content')
	let err:Error|undefined = undefined
	try {
		await browser_file_exists__waitfor(tempfile_path, 10)
	} catch(_err) {
		err = _err as Error
	} finally {
		await unlink(tempfile_path)
	}
	equal(await browser_file_exists_(tempfile_path), false)
	equal(err?.message, 'no browser support')
})
test('browser|build', async ()=>{
	await build({
		entryPoints: [join(dirname(new URL(import.meta.url).pathname), 'index.browser.js')],
		platform: 'browser',
		bundle: true,
		format: 'esm',
		write: false,
	})
})
test.run()
