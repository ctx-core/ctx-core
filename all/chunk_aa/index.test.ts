import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { chunk_aa_ } from '../chunk_aa/index.js'
test('chunk_aa_', ()=>{
	const a = ['foo', 'bar', 'baz']
	equal(chunk_aa_(a, 2), [
		['foo', 'bar'],
		['baz']
	])
})
test.run()
