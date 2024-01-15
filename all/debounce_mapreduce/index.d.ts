export function debounce_mapreduce<A, MapVal>(
	arg_:()=>A,
	map:(arg_a:A)=>Promise<MapVal>,
	arg_match_:(v0_arg:A, v1_arg:A)=>boolean,
	reduce:(val:MapVal, arg_a:A)=>void
):Promise<void>
