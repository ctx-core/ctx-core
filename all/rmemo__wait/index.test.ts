import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { sig_ } from '../rmemo/index.js'
import { rmemo__wait } from './index.js'
test('rmemo__wait', async ()=>{
	const subject = await new Promise(resolve=>{
		let subject = -1
		const subject$ = sig_(subject)
		rmemo__wait(subject$, $=>$ >= 0, 10_000).then(_subject=>{
			subject = _subject
			equal(_subject, 1)
			equal(subject, 1)
			resolve(_subject)
			return _subject
		})
		equal(subject, -1)
		subject$._ = 1
		equal(subject, -1)
		equal(subject$(), 1)
	})
	equal(subject, 1)
})
test.run()
