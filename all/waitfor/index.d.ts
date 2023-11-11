export declare function waitfor(
	fn:()=>Promise<boolean>|boolean,
	timeout:number,
	period?:number
):Promise<void>
