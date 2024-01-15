export declare function queue_(
	queue_size?:number
):queue_T
export { queue_ as _queue, }
export interface queue_T {
	add<Out>(fn:()=>Promise<Out>):Promise<Out>
	add_sync<Out>(fn:()=>Promise<Out>):number
	close():Promise<number>
	cancel():number
	get pending():number
	throttle(
		max_item_count_OR_throttle__continue_:
			number
			|((item_count:number)=>boolean)
	):Promise<number>
	get item_count():number
}
export interface queue_waiting_T {
	fn:()=>Promise<any>
	fulfil:(v:any)=>void
	reject:(err:any)=>void
}
export type queue_item_T = queue_waiting_T
