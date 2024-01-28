import { build } from 'esbuild'
import { readFile, writeFile } from 'node:fs/promises'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { tempfile_path_ as browser_tempfile_path_ } from './index.browser.js'
import { tempfile_path_ } from './index.js'
import { dirname, extname, join } from 'node:path'
test('tempfile_path_', async ()=>{
	const tempfile = await tempfile_path_()
	await writeFile(tempfile, 'the content')
	const content = await readFile(tempfile).then(buf=>'' + buf)
	equal(content, 'the content')
})
test('tempfile_path_|browser', async ()=>{
	const tempfile = await browser_tempfile_path_('/foo/bar', 'txt')
	equal(dirname(tempfile), '/foo/bar')
	equal(extname(tempfile), '.txt')
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
