import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { import_meta_env_ } from './index.js'
test('server|import_meta_env_', ()=>{
	equal(import_meta_env_(), process.env)
})
test.run()
