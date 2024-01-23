export function import_meta_env_() {
	return import_meta_env__ensure()
}
export function import_meta_env__ensure() {
	if (!import.meta.env) {
		import.meta.env = new Proxy(globalThis.process?.env ?? {}, {
			get(target, prop, receiver) {
				return Reflect.get(target, prop, receiver)
			},
			set(target, prop, value) {
				return Reflect.get(target, prop, value)
			}
		})
	}
	return import.meta.env
}
