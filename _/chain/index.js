/// <reference types="../chain/index.d.ts" />
import { isArray } from '../isArray/index.js'
/**
 * @param {chain__o_T}chain__o
 * @param {chain_key__T[]}key_a
 * @returns {*}
 */
export function chain_(chain__o, ...key_a) {
	let head = chain__o
	for (let i = 0; i < key_a.length; i++) {
		let key = key_a[i]
		if (typeof key === 'function') {
			process_key(key.call(head, head))
			continue
		}
		process_key(key)
	}
	return head
	function process_key(key) {
		if (typeof key === 'string') {
			walk_key(key)
		} else if (isArray(key)) {
			const in_key_a = key
			const args = in_key_a.slice(1)
			key = in_key_a[0]
			const key_ = key.split('.')
			const n1_key = key_.slice(0, key_.length - 1).join('.')
			if (n1_key) walk_key(n1_key)
			key = key_[key_.length - 1]
			head = head[key] && head[key](...args)
		} else {
			head = head[key]
		}
	}
	function walk_key(key) {
		const key_ = key.split('.')
		for (const key of key_) {
			head = head == null ? head : head[key]
		}
	}
}
export { chain_ as _chain, }
export function chain__(obj, or) {
	return (...keys)=>chain_(obj, ...keys) || or
}
export {
	chain__ as chain_2,
	chain__ as __chain,
}
