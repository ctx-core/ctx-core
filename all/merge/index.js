/**
 * Performs a deep merge on the target with each source_a
 * @param {unknown}target
 * @param {unknown}source_a
 * @returns {unknown}
 */
export function merge(target, ...source_a) {
	if (!target) return
	// Loop through each object and conduct a merge
	for (let i = 0; i < source_a.length; i++) {
		const source = source_a[i]
		for (let prop in source) {
			if (source.hasOwnProperty(prop)) {
				if (Object.prototype.toString.call(source[prop]) === '[object Object]') {
					// If we're doing a deep merge and the property is an object
					(target)[prop] = merge(target[prop], source[prop])
				} else {
					// Otherwise, do a regular merge
					(target)[prop] = source[prop]
				}
			}
		}
	}
	return target
}
