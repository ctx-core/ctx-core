import { readFile, writeFile } from 'fs/promises'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { tempfile_path_ } from './index.js'
test('tempfile_', async ()=>{
	const tempfile = await tempfile_path_()
	await writeFile(tempfile, 'the content')
	const content = await readFile(tempfile).then(buf=>buf.toString())
	equal(content, 'the content')
})
test.run()
