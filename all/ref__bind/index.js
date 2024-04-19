let wm = new WeakMap
export function ref__bind(key_ref, val) {
	wm.set(key_ref, [...wm.get(key_ref) ?? [], val])
}
