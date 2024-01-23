export function run_or_val_(run_or_val, ...arg_a) {
	return (
		typeof run_or_val === 'function'
			? run_or_val(...arg_a)
			: run_or_val
	)
}
