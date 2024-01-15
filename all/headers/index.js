/// <reference types="../headers/index.d.ts" />
export const { Headers } = globalThis
/**
 * @param {HeadersInit}[init]
 * @returns {HeadersInit|undefined}
 * @private
 */
export function headers__new(init) {
	return new Headers(init)
}
