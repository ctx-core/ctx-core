export declare function run<O, A extends unknown[] = unknown[]>(
	fn:(...arg_a:A)=>O,
	...arg_a:A
):O
export { run as _ }
