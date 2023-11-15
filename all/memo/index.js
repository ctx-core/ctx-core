import { isPrimitive } from '../isPrimitive/index.js'
import { prototype_ } from '../prototype/index.js'
let empty_sym, WeakRef_proto
/**
 * @param {(...arg_a:any[])=>any}fn
 * @returns A memo caching arguments & return values. Arguments that are Objects are cached with a WeakRef.
 * @private
 */
export function memo_(fn) {
	let m = new Map
	let wm = new WeakMap
	if (!empty_sym) {
		empty_sym = Symbol('E')
		WeakRef_proto = WeakRef.prototype
	}
	let memo = (...arg_a)=>{
		if (!arg_a.length) {
			if (!m.has(empty_sym)) {
				m.set(empty_sym, fn())
			}
			return m.get(empty_sym)
		}
		let arg0 = arg_a[0]
		let map = isPrimitive(arg0) ? m : wm
		/** @type {[unknown[], unknown][]} */
		let cache__arg_a_T_ret__a = map.get(arg0)
		if (!cache__arg_a_T_ret__a) {
			cache__arg_a_T_ret__a = []
			map.set(arg0, cache__arg_a_T_ret__a)
		}
		cache__arg_a_T_ret__a:for (let cache__arg_a_T_ret__a__i = cache__arg_a_T_ret__a.length; cache__arg_a_T_ret__a__i--;) {
			let cache__arg_a_T_ret = cache__arg_a_T_ret__a[cache__arg_a_T_ret__a__i]
			let cache__arg_a = cache__arg_a_T_ret[0]
			let { length } = arg_a
			if (cache__arg_a.length !== length) continue
			for (let arg_a__i = length; arg_a__i--;) {
				let cache__arg_val = cache__arg_a[arg_a__i]
				if (prototype_(cache__arg_val) === WeakRef_proto) {
					cache__arg_val = cache__arg_val.deref()
					if (!cache__arg_val) { // cleanup cache__arg_a when arg is GC
						cache__arg_a_T_ret__a.splice(cache__arg_a_T_ret__a__i, 1)
						continue cache__arg_a_T_ret__a
					}
				}
				let arg_val = arg_a[arg_a__i]
				if (arg_val !== cache__arg_val) break
				if (!arg_a__i) { // arguments match
					return cache__arg_a_T_ret[1]
				}
			}
		}
		let ret = fn(...arg_a)
		cache__arg_a_T_ret__a.push([arg_a.map(arg=>isPrimitive(arg) ? arg : new WeakRef(arg)), ret])
		return ret
	}
	memo.clear = ()=>{
		m.clear()
		wm = new WeakMap
	}
	return memo
}
