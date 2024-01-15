import type { falsy } from '../falsy/index.js'
export function falsy__none_<
	T extends any[], U
>(
	$:T,
	_:(...$:T)=>U,
	onfalsy?:(falsy:falsy)=>any
):U
export { falsy__none_ as falsy__check_ }
