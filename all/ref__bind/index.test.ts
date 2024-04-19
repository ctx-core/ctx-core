import { test } from 'uvu'
import { ref__bind } from './index.js'
test('ref__bind|no error', ()=>{
	let key = {}
	let val = {}
	ref__bind(key, val)
})
test.run()
