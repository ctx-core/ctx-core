import { fetch_T } from '../fetch/index.js'
export declare function fetch_response_pair__new2(fetch:fetch_T):typeof fetch_response_pair__new
export declare function fetch_response_pair__new<Body>(
	input:RequestInfo, init?:RequestInit
):Promise<[Body, globalThis.Response]>
