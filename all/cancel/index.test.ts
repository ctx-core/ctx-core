import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { Cancel } from './index.js'
test('Cancel', ()=>{
	equal(new Cancel().message, 'Cancel')
	equal(new Cancel({ message: 'custom message' }).message, 'custom message')
	equal(new Cancel({ returns: 1 }).returns, 1)
})
test.run()
