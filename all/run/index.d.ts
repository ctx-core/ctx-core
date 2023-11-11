export declare function run<
	O extends unknown = unknown,
	A extends any[] = any[]
>(
	fn:(...arg_a:A)=>O,
	...arg_a:A
):O
export { run as _ }
