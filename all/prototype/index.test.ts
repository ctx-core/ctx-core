import { test } from 'uvu'
import { is, not } from 'uvu/assert'
import { prototype_ } from './index.js'
test('prototype_', ()=>{
	is(prototype_({}), Object.prototype)
	is(prototype_(new WeakRef({})), WeakRef.prototype)
	is(prototype_(1), Number.prototype)
	is(prototype_(true), Boolean.prototype)
	is(prototype_(false), Boolean.prototype)
	not.equal(prototype_(new Date), Boolean.prototype)
	not.equal(prototype_({}), Boolean.prototype)
	not.equal(prototype_(1), Boolean.prototype)
})
test.run()
