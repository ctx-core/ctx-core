import { dirname, join } from 'node:path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { crypto__sign as browser_crypto__sign } from './index.browser.js'
import { crypto__sign } from './index.js'
import { build } from 'esbuild'
test('crypto__sign|server', async ()=>{
	// Generate keys
	const { publicKey, privateKey } =
		await crypto.subtle.generateKey({
			name: 'RSASSA-PKCS1-v1_5',
			modulusLength: 2048,
			publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
			hash: 'SHA-256',
		}, true, ['sign', 'verify'])
	const algorithm = { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }
	const data = Buffer.from('test message')
	const signature = await crypto__sign(algorithm, privateKey, data)
	equal(
		await crypto.subtle.verify(algorithm, publicKey, signature, data),
		true)
})
test('crypto__sign|browser', async ()=>{
	// Generate keys
	const { publicKey, privateKey } =
		await crypto.subtle.generateKey({
			name: 'RSASSA-PKCS1-v1_5',
			modulusLength: 2048,
			publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
			hash: 'SHA-256',
		}, true, ['sign', 'verify'])
	const algorithm = { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }
	const data = Buffer.from('test message')
	const signature = await browser_crypto__sign(algorithm, privateKey, data)
	equal(
		await crypto.subtle.verify(algorithm, publicKey, signature, data),
		true)
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
