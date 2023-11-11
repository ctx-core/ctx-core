/**
 * @param {(...args:unknown[])=>unknown}fn
 * @param {($:Parameters<unknown>, index?:number, $a?:unknown[])=>unknown}[every_fn]
 * @param {unknown}[or]
 * @return {(fn:(...args:unknown[])=>unknown)}
 */
export function every_arg_(
	fn,
	every_fn = $=>$ != null,
	or = ()=>null
) {
	return (...arg_a)=>{
		return arg_a.every(every_fn) ? fn(...arg_a) : or()
	}
}
