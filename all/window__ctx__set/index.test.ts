import { build } from 'esbuild'
import { JSDOM } from 'jsdom'
import { dirname, join } from 'node:path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_ } from '../be_/index.js'
import { ctx__new } from '../ctx/index.js'
import { memo_, type memo_T } from '../rmemo/index.js'
import { window__ctx__set as browser_window__ctx__set } from './index.browser.js'
import { window__ctx__set } from './index.js'
test('window__ctx__set|server', ()=>{
	const ctx = ctx__new()
	window__ctx__set(ctx)
})
test('window__ctx__set|browser', ()=>{
	const jsdom = new JSDOM()
	const { window } = jsdom.window
	const prev__window = globalThis['window']
	globalThis['window'] = window as never
	try {
		const ctx = ctx__new()
		const val$ = be_(()=>
			memo_(()=>1),
		{ id: 'val' })
		browser_window__ctx__set(ctx)
		equal(val$(ctx)(), 1)
		equal(window.ctx__get<memo_T<number>>('val'), val$(ctx))
		equal(window.ctx__get<memo_T<number>>('val')(), 1)
		equal(window.ctx__get_('val'), 1)
	} finally {
		globalThis['window'] = prev__window
	}
})
test('browser|build', async ()=>{
	await build({
		entryPoints: [join(dirname(new URL(import.meta.url).pathname), 'index.browser.js')],
		platform: 'browser',
		bundle: true,
		format: 'esm',
		write: false,
	})
})
test.run()
