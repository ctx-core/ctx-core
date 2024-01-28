import { build } from 'esbuild'
import esmock from 'esmock'
import { dirname, join, resolve } from 'node:path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { is_entry_file_ as browser_is_entry_file_ } from './index.browser.js'
import { is_entry_file_ } from './index.js'
test('is_entry_file_|server', async ()=>{
	equal(
		await is_entry_file_(import.meta.url, new URL(import.meta.url).pathname),
		true)
	equal(
		await is_entry_file_(
			import.meta.url,
			new URL(import.meta.url).pathname.replace(
				resolve(process.cwd()) + '/', '')),
		true)
	equal(
		await is_entry_file_(import.meta.url, '/not/url'),
		false)
})
test('is_entry_file_|browser', async ()=>{
	equal(
		browser_is_entry_file_(import.meta.url, new URL(import.meta.url).pathname),
		false)
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
