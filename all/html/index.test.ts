import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { html_ } from './index.js'
test('html_', ()=>{
	equal(html_(
		`<div>"&'foo'bar"</div>`
	), '&lt;div&gt;&quot;&amp;&#039;foo&#039;bar&quot;&lt;/div&gt;')
})
test.run()
