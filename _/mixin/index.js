import { assign } from '../assign/index.js'
/**
 * Mixin properties from source_a into target
 * @param {unknown}target
 * @param {unknown}source_a
 * @returns {unknown}
 * @example
 * mixin(obj, {
 *        get foo() {
 *            return 'bar.js'
 *        }
 *    })
 */
export function mixin(target, ...source_a) {
	source_a.forEach((source)=>{
		let descriptors1 = Object.keys(source).reduce((descriptors, key)=>{
			assign(descriptors, {
				[key]: Object.getOwnPropertyDescriptor(source, key)
			})
			return descriptors
		}, {})
		// By default, Object.assign copies enumerable Symbols, too
		Object.getOwnPropertySymbols(source).forEach((sym)=>{
			let descriptor = Object.getOwnPropertyDescriptor(source, sym)
			if (descriptor.enumerable) {
				assign(descriptors1, {
					[sym]: descriptor
				})
			}
		})
		Object.defineProperties(target, descriptors1)
	})
	return target
}
