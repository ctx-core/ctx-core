import type { nullish } from '../nullish/index.js'
export declare function nullish__guard__async<Val>(
	label:string,
	...fn_a:(()=>Promise<nullish|Val>)[]
):Promise<Val>
export {
	nullish__guard__async as nullish_async_guard,
	nullish__guard__async as nullsy_async_guard,
}
