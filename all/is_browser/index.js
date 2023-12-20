export function is_browser_() {
	return !globalThis.process?.release?.name
}
