import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_ } from '../be_/index.js'
import { ctx__new } from '../ctx/index.js'
import { be } from './index.js'
test('be|s|BeMap', ()=>{
	const ctx = ctx__new()
	let incrementer_num = 0
	const incrementer = ()=>++incrementer_num
	const root_ = be_(()=>
		incrementer(),
	{ id: 'root_' })
	const child = be(ctx, ctx=>
		root_(ctx) + incrementer(),
	{ id: 'child_' })
	equal(root_(ctx), 1)
	equal(ctx.s[''].get('root_')![0], 1)
	equal(child, 3)
	equal(ctx.s[''].get('child_')![0], 3)
})
test.run()
