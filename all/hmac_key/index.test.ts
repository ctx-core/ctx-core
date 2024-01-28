import { build } from 'esbuild'
import { dirname, join } from 'node:path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { hmac_key_ as browser_hmac_key_ } from './index.browser.js'
import { hmac_key_ } from './index.js'
test('hmac_key_|server', async ()=>{
	const rawKey = crypto.getRandomValues(new Uint8Array(16))
	const key = await hmac_key_('SHA-256', rawKey)
	equal(key.type, 'secret')
	equal(key.algorithm.name, 'HMAC')
	equal(key.extractable, true)
	equal(key.usages.indexOf('sign') > -1, true)
	equal(key.usages.indexOf('verify') > -1, true)
})
test('hmac_key_|browser', async ()=>{
	const rawKey = crypto.getRandomValues(new Uint8Array(16))
	const key = await browser_hmac_key_('SHA-256', rawKey)
	equal(key.type, 'secret')
	equal(key.algorithm.name, 'HMAC')
	equal(key.extractable, true)
	equal(key.usages.indexOf('sign') > -1, true)
	equal(key.usages.indexOf('verify') > -1, true)
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
