export declare function promise_timeout<
	O extends unknown = unknown
>(
	promise:(()=>Promise<O>)|Promise<O>, ms:number, error?:Error
):Promise<O>
