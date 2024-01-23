export declare function run_or_val_<O, A extends unknown[] = unknown[]>(
	fn_or_val:O|((...arg_a:A)=>O),
	...arg_a:A
):O
