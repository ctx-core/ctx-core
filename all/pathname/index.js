/// <reference lib="dom" />
/**
 * @returns {string|undefined}
 * @private true
 */
export function pathname_(
	url = typeof window === 'object' ? window.location.href : undefined
) {
	return url != null ? new URL(url).pathname : undefined
}
export { pathname_ as _pathname, }
