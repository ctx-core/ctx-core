import { build } from 'esbuild'
import { dirname, join } from 'node:path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { hex__digest as browser_hex__digest } from './index.browser.js'
import { hex__digest } from './index.js'
test('hex__digest|server', async ()=>{
	const msgUint8 = new TextEncoder().encode('Hello World') // encode as (utf-8) Uint8Array
	const hashHex = await hex__digest('SHA-256', msgUint8) // hash the message
	equal(hashHex, 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e')
})
test('hex__digest|browser', async ()=>{
	const msgUint8 = new TextEncoder().encode('Hello World') // encode as (utf-8) Uint8Array
	const hashHex = await browser_hex__digest('SHA-256', msgUint8) // hash the message
	equal(hashHex, 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e')
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
