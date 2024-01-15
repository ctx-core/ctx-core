export declare function batch_queue_(queue_size?:number, batch_size?:number):batch_queue_T
export interface batch_queue_T {
	add<Out>(queue_fn:()=>Promise<Out>):Promise<[()=>Promise<Out>, Promise<Out>]>
	close():Promise<unknown>
}
