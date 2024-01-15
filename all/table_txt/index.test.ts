import { test } from 'uvu'
import { is } from 'uvu/assert'
import { table_txt_ } from '../table_txt/index.js'
test('table_txt_', ()=>{
	is(table_txt_([
		['-c, --code', 'Factset dataset code <ent,own,ref,sym>'],
		['-v, --version', 'Factset version'],
		['-s, --sequence', 'Sequence'],
		['-h, --help', 'This help message'],
	]), `
-c, --code      Factset dataset code <ent,own,ref,sym>
-v, --version   Factset version
-s, --sequence  Sequence
-h, --help      This help message
	`.trim())
})
test.run()
