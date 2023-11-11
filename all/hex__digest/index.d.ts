import type { digest__algorithm_T } from '../digest__algorithm/index.js'
export declare function hex__digest(
	algorithm:digest__algorithm_T,
	message:string|BufferSource
):Promise<string>
