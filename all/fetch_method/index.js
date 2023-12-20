/// <reference types="../fetch_method/index.d.ts" />
/**
 * @param {fetch_method___params_T}fetch_method___params
 * @returns {string}
 * @private
 */
export function fetch_method__new(fetch_method___params) {
	return (fetch_method___params.method || 'GET').toUpperCase()
}
