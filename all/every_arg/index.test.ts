import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { every_arg_ } from '../every_arg/index.js'
test('every_arg_|default every fn & or', ()=>{
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(null, null, null), null)
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(null, null, true), null)
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(null, true, true), null)
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(false, true, true), 'foobar')
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(false, null, true), null)
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(false, false, null))
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(false, false, false), 'foobar')
})
test('every_arg_|default or', ()=>{
	const I = ($:any)=>$
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, false, false), null)
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, false, true), null)
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, true, true), null)
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, true, true), null)
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, false, true), null)
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, false, false), null)
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, false, true), null)
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, true, true), null)
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(true, true, true), 'foobar')
})
test('every_arg_|no defaults', ()=>{
	const I = ($:any)=>$
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, false, false), '')
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, false, true), '')
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, true, true), '')
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, true, true), '')
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, false, true), '')
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, false, false), '')
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, false, true), '')
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, true, true), '')
	equal(every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(true, true, true), 'foobar')
})
test.run()
