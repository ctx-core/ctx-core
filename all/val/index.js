/**
 * @param {unknown}val
 * @returns {(val:unknown)=>()=>unknown}
 */
export function val_(val) {
	return ()=>val
}
export { val_ as _val, }
