import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { async_gen_a_ } from '../async_gen_a/index.js'
test('async_gen_a_', async ()=>{
	equal(await async_gen_a_(async_gen_([2, 1, 3, 0])), [2, 1, 3, 0])
})
async function* async_gen_(a:number[]):AsyncGenerator<number> {
	for (const $ of a) {
		yield $
	}
}
test.run()
