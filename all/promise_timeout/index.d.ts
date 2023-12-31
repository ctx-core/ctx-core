import type { cancel_Promise } from '../promise/index.js'
export declare function promise_timeout<O>(
	promise:(()=>Promise<O>)|Promise<O>,
	ms:number,
	error?:Error
):cancel_Promise<O, (val?:O)=>Promise<O>>
