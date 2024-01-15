import esmock from 'esmock'
import { resolve } from 'node:path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { is_entry_file_ } from './index.js'
test('is_entry_file_|node', async ()=>{
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
	const { is_entry_file_ } = await esmock('./index.js', {
		'../process_release_name/index.js': {
			process_release_name: undefined
		}
	})
	equal(
		is_entry_file_(import.meta.url, new URL(import.meta.url).pathname),
		false)
})
test.run()
