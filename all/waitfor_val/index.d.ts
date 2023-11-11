export declare function waitfor_val<Val>(
	fn:()=>Promise<Val>,
	condition_fn:(val:Val)=>any,
	timeout:number,
	period?:number
):Promise<Val>
