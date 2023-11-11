/** @typedef {import('../headers/index.d.ts').Headers} */
export const { Headers } = globalThis
/**
 * @param {HeadersInit}[init]
 * @returns {HeadersInit|undefined}
 * @private
 */
export function headers__new(init) {
	return new Headers(init)
}
