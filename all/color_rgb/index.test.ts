import { deepEqual } from 'assert'
import { test } from 'uvu'
import { color_rgb_hex_a_ } from '../color_rgb/index.js'
test('color_rgb_hex_a_', ()=>{
	deepEqual(
		color_rgb_hex_a_('AABBCC'),
		[170, 187, 204])
	deepEqual(
		color_rgb_hex_a_('#AABBCC'),
		[170, 187, 204])
})
test.run()
