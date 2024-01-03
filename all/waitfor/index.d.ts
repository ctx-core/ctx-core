import type { cancel_Promise } from '../promise/index.js'
export declare function waitfor<V>(
	fn:()=>Promise<V>|V,
	timeout:number,
	period?:number|((promise:waitfor_Promise<V>)=>Promise<number>)
):waitfor_Promise<V>
export { waitfor as waitfor_val, waitfor as waitfor_val_ }
export declare function cancel__period_<V>(
	ms:number,
	should_cancel_:()=>boolean
):(
	promise:waitfor_Promise<V>
)=>Promise<number>
export type waitfor_Promise<V> =
	cancel_Promise<V, (val?:V)=>Promise<V>>
