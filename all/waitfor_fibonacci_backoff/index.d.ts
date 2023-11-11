export declare function waitfor_fibonacci_backoff(
	fn:()=>Promise<Response>,
	delay?:number
):Promise<Response>
export {
	waitfor_fibonacci_backoff as waitfor__backoff__fibonacci,
	waitfor_fibonacci_backoff as _waitfor__ratelimit__backoff__fibonacci,
}
