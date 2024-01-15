export declare function run<O, A extends unknown[] = unknown[]>(
	fn:(...arg_a:A)=>O,
	...arg_a:A
):O
export declare function run<O, A extends unknown[] = unknown[]>(
	arg_a:A,
	fn:(...arg_a:A)=>O
):O
