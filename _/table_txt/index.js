import { isNumber_ } from '../isNumber/index.js'
import { rPad } from '../rPad/index.js'
/**
 * @param {string[][]}aa
 * @returns {string}
 */
export function table_txt_(aa) {
	const str_aa_num_a_pair = table_txt__str_aa_num_a_pair_(aa)
	return str_aa_num_a_pair[0].map(a=>
		a.reduce((s, $i, i)=>
			s += i === a.length - 1
				? $i
				: rPad($i, ' ', str_aa_num_a_pair[1][i] + 2), '')
	).join('\n')
}
/**
 * @param {string[][]}aa
 * @returns {[string[][], number[]]}
 */
export function table_txt__str_aa_num_a_pair_(aa) {
	return aa.reduce((str_aa_num_a_pair, a)=>{
		str_aa_num_a_pair[0].push(a)
		for (let i = 0; i < a.length; i++) {
			if (!isNumber_(str_aa_num_a_pair[1][i])) str_aa_num_a_pair[1][i] = 0
			str_aa_num_a_pair[1][i] = Math.max(str_aa_num_a_pair[1][i], a[i].length)
		}
		return str_aa_num_a_pair
	}, [[], []])
}
