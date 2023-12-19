/**
 * Returns a string of escaped html
 * @param {string}unsafe
 * @returns string
 */
export function html_(unsafe) {
	return (
		unsafe
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;')
	)
}
export {
	html_ as html__escape,
	html_ as _html,
}
