export function is_server_() {
	return !!globalThis.process?.release?.name
}
