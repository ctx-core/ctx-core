import { build } from 'esbuild'
import { dirname, join } from 'node:path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { hmac_key_ } from '../hmac_key/index.js'
import { hmac_ as browser_hmac_ } from './index.browser.js'
import { hmac_ } from './index.js'
test('hmac_|server', async ()=>{
	const rawKey = await rawKey__new()
	const key = await hmac_key_('SHA-256', rawKey)
	const data = Buffer.from('test message')
	const hmac = await hmac_(key.algorithm, key, data)
	equal(hmac, 'febec7c1ffb64d25b38e4b8741702495ca270b37e613958e43b74c1f8eaf63fc')
})
test('hmac_|browser', async ()=>{
	const rawKey = await rawKey__new()
	const key = await hmac_key_('SHA-256', rawKey)
	const data = Buffer.from('test message')
	const hmac = await browser_hmac_(key.algorithm, key, data)
	equal(hmac, 'febec7c1ffb64d25b38e4b8741702495ca270b37e613958e43b74c1f8eaf63fc')
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
async function rawKey__new() {
	const encoder = new TextEncoder()
	const password = 'foobar'
	const salt = 'pass-the-salt'
	const passwordBuffer = encoder.encode(password)
	const saltBuffer = encoder.encode(salt)
	// Import the password as a key
	const passwordKey = await crypto.subtle.importKey(
		'raw', // raw format (UInt8 array of bytes)
		passwordBuffer, // the password buffer
		{ name: 'PBKDF2' }, // encrypting using PBKDF2
		false, // it's not extractable
		['deriveBits', 'deriveKey'] // can only derive bits and keys
	)
	// Derive a key from the password
	return crypto.subtle.deriveBits(
		{
			name: 'PBKDF2',
			salt: saltBuffer,
			iterations: 1000, // the higher the number, the stronger, but slower
			hash: 'SHA-256' // hashing function
		},
		passwordKey,
		16 * 8 // deriveLength in bits
	)
}
