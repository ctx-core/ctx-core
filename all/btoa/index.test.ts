import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { btoa } from './index.js'
test('btoa', ()=>{
	equal(btoa('test'), 'dGVzdA==')
})
test.run()