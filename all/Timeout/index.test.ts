import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { Timeout } from './index.js'
test('Timeout', ()=>{
	equal(new Timeout(10).message, 'Timeout 10ms')
	equal(new Timeout('custom message').message, 'custom message')
})
test.run()
