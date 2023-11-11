import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { entries_gen_ } from '../entries_gen/index.js'
test('entries_gen_', ()=>{
	const date = new Date()
	const obj = {
		id: 1,
		name: 'My name',
		date
	}
	const key_a:string[] = []
	const val_a:any[] = []
	for (const [key, val] of entries_gen_(obj)) {
		key_a.push(key)
		val_a.push(val)
	}
	equal(key_a, ['id', 'name', 'date'])
	equal(val_a, [1, 'My name', date])
})
test.run()
