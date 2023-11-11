/**
 * @param {Function&{ prototype:object }}target
 * @param {Function&{ prototype:object }}source
 * @returns {Function&{ prototype:object }}
 */
export function prototype_mixin(target, source) {
	const target_prototype = target.prototype
	const source_prototype = source.prototype
	const propertyNames = Object.getOwnPropertyNames(source_prototype)
	for (let i = 0; i < propertyNames.length; i++) {
		const propertyName = propertyNames[i]
		if (propertyName !== 'constructor') {
			Object.defineProperty(
				target_prototype,
				propertyName,
				Object.getOwnPropertyDescriptor(source_prototype, propertyName))
		}
	}
	return target
}
