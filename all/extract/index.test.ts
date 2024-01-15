import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { extract } from '../extract/index.js'
test('extract', ()=>{
	const obj = {
		id: 1,
		name: 'My name',
		date: new Date()
	}
	equal({
		id: 1,
		name: 'My name'
	}, extract(obj, {
		id: true,
		name: true
	}))
})
test.run()
