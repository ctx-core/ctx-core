import type { waitfor_Promise } from '../waitfor/index.js'
export declare function file_exists_(path:string):Promise<boolean|undefined>
export {
	file_exists_ as path__exists_
}
export declare function file_exists__waitfor(
	path_OR_op:string|(()=>unknown|Promise<unknown>),
	timeout?:number,
	period?:number|((promise:waitfor_Promise<boolean>)=>Promise<number>)
):waitfor_Promise<boolean>
