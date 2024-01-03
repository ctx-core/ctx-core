import type { cancel_Promise } from '../promise/index.js'
export declare function timeout_promise<O>(
	promise:(()=>Promise<O>)|Promise<O>,
	ms:number,
	error?:Error
):cancel_Promise<O, (val?:O)=>Promise<O>>
export { timeout_promise as promise_timeout }
