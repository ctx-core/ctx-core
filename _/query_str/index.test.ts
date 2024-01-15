import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { query_value_T } from './index.js'
import { query_str_ } from './index.js'
test('query_str_|interface', ()=>{
	equal(
		query_str_({
			number: 1, string: 'a', boolean: true,
			number_a: [1, 2, 3], string_a: ['a', 'b', 'c'],
			string_or_number_a: ['a', 1],
			string_or_boolean_a: ['a', true],
			number_or_boolean_a: [true, 1],
			string_or_number_or_boolean_a: ['a', true, 1],
		} as query_I),
		'?number=1&string=a&boolean=true&number_a[]=1&number_a[]=2&number_a[]=3&string_a[]=a&string_a[]=b&string_a[]=c&string_or_number_a[]=a&string_or_number_a[]=1&string_or_boolean_a[]=a&string_or_boolean_a[]=true&number_or_boolean_a[]=true&number_or_boolean_a[]=1&string_or_number_or_boolean_a[]=a&string_or_number_or_boolean_a[]=true&string_or_number_or_boolean_a[]=1'
	)
})
test('query_str_|record', ()=>{
	equal(
		query_str_({
			number: 1, string: 'a', boolean: true,
			number_a: [1, 2, 3], string_a: ['a', 'b', 'c'],
			string_or_number_a: ['a', 1],
			string_or_boolean_a: ['a', true],
			number_or_boolean_a: [true, 1],
			string_or_number_or_boolean_a: ['a', true, 1],
		}),
		'?number=1&string=a&boolean=true&number_a[]=1&number_a[]=2&number_a[]=3&string_a[]=a&string_a[]=b&string_a[]=c&string_or_number_a[]=a&string_or_number_a[]=1&string_or_boolean_a[]=a&string_or_boolean_a[]=true&number_or_boolean_a[]=true&number_or_boolean_a[]=1&string_or_number_or_boolean_a[]=a&string_or_number_or_boolean_a[]=true&string_or_number_or_boolean_a[]=1'
	)
})
test.run()
interface query_I {
	[key:string]:query_value_T
	number:number
	string:string
	boolean:boolean
	number_a:number[]
	string_a:string[]
	string_or_number_a:(string|number)[]
	string_or_boolean_a:(string|boolean)[]
	number_or_boolean_a:(boolean|number)[]
	string_or_number_or_boolean_a:(string|boolean|number)[]
}
