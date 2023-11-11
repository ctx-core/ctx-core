/**
 * @param {string|Symbol}prop
 * @param {()=>unknown}_
 */
export function globalThis__prop__ensure(prop, _) {
	if (!globalThis[prop]) {
		globalThis[prop] = _()
	}
	return globalThis[prop]
}
