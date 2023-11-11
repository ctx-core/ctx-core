/**
 * Rate limit function factory.
 * @link {@see https://www.matteoagosti.com/blog/2013/01/22/rate-limiting-function-calls-in-javascript/}
 */
export declare function rate_limit_<Out>(
	ops_max:number, interval:number, allow_bursts?:boolean
):rate_limit__T<Out>
export declare type rate_limit__T<Out> = (fn:rate_limit_fn_T<Out>)=>Promise<Out>
export declare type rate_limit_fn_T<Out> = ()=>Promise<Out>
export { rate_limit_ as _rate_limit, }
