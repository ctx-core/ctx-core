import { build } from 'esbuild'
import { dirname, join } from 'node:path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { crypto as browser_crypto, crypto_ as browser_crypto_ } from './index.browser.js'
import { crypto, crypto_ } from './index.js'
test('crypto', ()=>{
	equal(crypto, globalThis.crypto)
})
test('crypto|browser', ()=>{
	equal(browser_crypto, globalThis.crypto)
})
test('crypto_', ()=>{
	equal(crypto_(), globalThis.crypto)
})
test('crypto_|browser', ()=>{
	equal(browser_crypto_(), globalThis.crypto)
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
