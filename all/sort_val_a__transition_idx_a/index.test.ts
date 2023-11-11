import { test } from 'uvu'
import { equal } from 'uvu/assert'
import {
	sort_val_a__enter_a_frame_,
	sort_val_a__enter_a_frame_fn_,
	sort_val_a__exit_a_frame_,
	sort_val_a__exit_a_frame_fn_
} from '../sort_val_a__transition_idx_a/index.js'
test('sort_val_a__enter_a_frame_', ()=>{
	equal({
		idx_a: [0, 3, 5],
		val_a: ['a', 'b', 'c']
	}, sort_val_a__enter_a_frame_(['a', 'a', 'a', 'b', 'b', 'c']))
})
test('sort_val_a__enter_a_frame_fn_', ()=>{
	equal({
		idx_a: [0, 3, 5],
		val_a: ['a', 'b', 'c']
	}, sort_val_a__enter_a_frame_fn_()(['a', 'a', 'a', 'b', 'b', 'c']))
	{
		const iter_a_eq_arg_aa:(readonly string[])[] = []
		equal({
			idx_a: [0],
			val_a: ['a']
		}, sort_val_a__enter_a_frame_fn_<string>(arg_a=>{
			iter_a_eq_arg_aa.push(arg_a)
			return true
		})(['a', 'a', 'a', 'b', 'b', 'c']))
		equal([
			['a', 'a'],
			['a', 'a'],
			['b', 'a'],
			['b', 'b'],
			['c', 'b'],
		], iter_a_eq_arg_aa)
	}
	{
		const iter_a_eq_arg_aa:(readonly string[])[] = []
		equal({
			idx_a: [0, 1, 2, 3, 4, 5],
			val_a: ['a', 'a', 'a', 'b', 'b', 'c']
		}, sort_val_a__enter_a_frame_fn_<string>(arg_a=>{
			iter_a_eq_arg_aa.push(arg_a)
			return false
		})(['a', 'a', 'a', 'b', 'b', 'c']))
		equal([
			['a', 'a'],
			['a', 'a'],
			['b', 'a'],
			['b', 'b'],
			['c', 'b'],
		], iter_a_eq_arg_aa)
	}
})
test('sort_val_a__exit_a_frame_', ()=>{
	equal(sort_val_a__exit_a_frame_(['a', 'a', 'a', 'b', 'b', 'c']), {
		idx_a: [2, 4, 5],
		val_a: ['a', 'b', 'c']
	})
})
test('sort_val_a__exit_a_frame_fn_', ()=>{
	equal(sort_val_a__exit_a_frame_fn_()(['a', 'a', 'a', 'b', 'b', 'c']), {
		idx_a: [2, 4, 5],
		val_a: ['a', 'b', 'c']
	})
	{
		const iter_a_eq_arg_aaa:(readonly string[])[][] = []
		equal(
			sort_val_a__exit_a_frame_fn_<string>((...arg_a)=>{
				iter_a_eq_arg_aaa.push(arg_a)
				return true
			})(['a', 'a', 'a', 'b', 'b', 'c']),
			{ idx_a: [5], val_a: ['c'] })
		equal(iter_a_eq_arg_aaa, [
			[['a', 'a']],
			[['a', 'a']],
			[['a', 'b']],
			[['b', 'b']],
			[['b', 'c']],
		])
	}
	{
		const iter_a_eq_arg_aaa:(readonly string[])[][] = []
		equal(
			sort_val_a__exit_a_frame_fn_<string>((...arg_aa)=>{
				iter_a_eq_arg_aaa.push(arg_aa)
				return false
			})(['a', 'a', 'a', 'b', 'b', 'c']),
			{ idx_a: [0, 1, 2, 3, 4, 5], val_a: ['a', 'a', 'a', 'b', 'b', 'c'] })
		equal(iter_a_eq_arg_aaa, [
			[['a', 'a']],
			[['a', 'a']],
			[['a', 'b']],
			[['b', 'b']],
			[['b', 'c']],
		])
	}
})
test.run()
