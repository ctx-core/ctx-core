import { build } from 'esbuild'
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
test('ctx-core/atob|browser|loads matching index.browser.js files', async ()=>{
	const index_js_source = await readFile(
		join(dirname(new URL(import.meta.url).pathname), 'index.js')
	).then(buf=>'' + buf)
	const index_browser_js_source = await readFile(
		join(dirname(new URL(import.meta.url).pathname), 'index.browser.js')
	).then(buf=>'' + buf)
	equal(
		index_browser_js_source,
		index_js_source.replaceAll('index.js', 'index.browser.js'))
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

