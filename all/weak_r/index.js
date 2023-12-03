import { assign } from '../assign/index.js'
/** @typedef {import('../weak_r/index.d.ts').weak_r_T} */
const { get } = Reflect
const add_strong_sym = Symbol('add_strong')
const delete_strong_sym = Symbol('delete_strong')
let _undefined
/**
 * @param {object}[back_o]
 * @returns {object}
 * @private
 */
export function weak_r_(back_o = {}) {
	const strong_set = new Set()
	assign(back_o, {
		[add_strong_sym](key) {
			strong_set.add(key)
		},
		[delete_strong_sym](key) {
			strong_set.delete(key)
		}
	})
	const proxy_o = new Proxy(back_o, {
		getOwnPropertyDescriptor(back_ctx, prop) {
			let value = get(back_ctx, prop)
			if ((value === null || value === void 0 ? void 0 : value.deref) && !strong_set.has(prop)) {
				value = value.deref()
			}
			return (
				value === _undefined
					? _undefined
					: {
						configurable: true,
						enumerable: true,
						value,
						writable: true
					}
			)
		},
		get(back_ctx, prop) {
			const uw_val = get(back_ctx, prop)
			return (uw_val === null || uw_val === void 0 ? void 0 : uw_val.deref) && !strong_set.has(prop) ? uw_val.deref() : uw_val
		},
		set(back_ctx, prop, val) {
			const t = typeof val
			assign(back_ctx, {
				[prop]: (t === 'object' || t === 'function') && !strong_set.has(prop) ? new WeakRef(val) : val
			})
			return true
		}
	})
	return proxy_o
}
export { weak_r_ as weak_ctx_, }
/**
 * @param {weak_r_T}obj
 * @param {string}prop
 */
export function strong__call(obj, prop) {
	obj[add_strong_sym](prop)
}
export { strong__call as ref_strong }
/**
 * @param {weak_r_T}obj
 * @param {string}prop
 * @param {unknown}val
 */
export function strong__assign(obj, prop, val) {
	strong__call(obj, prop)
	if (val !== _undefined) {
		assign(obj, {
			[prop]: val
		})
	}
}
export { strong__assign as set_strong }
/**
 * @param {weak_r_T}obj
 * @param {string}prop
 */
export function weak__call(obj, prop) {
	obj[delete_strong_sym](prop)
}
export { weak__call as ref_weak }
/**
 * @param {weak_r_T}obj
 * @param {string}prop
 */
export function weak__unset(obj, prop) {
	weak__call(obj, prop)
	delete obj[prop]
}
export { weak__unset as unset_weak }
