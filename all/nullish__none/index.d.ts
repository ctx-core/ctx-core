import type { nullish } from '../nullish/index.js'
import type { TupleExclude } from '../tup/index.js'
export function nullish__none_<T extends unknown[], U>(
	$:T,
	_:(...$:TupleExclude<T, nullish>)=>U,
	onnullish?:(nullish:nullish)=>unknown
):U
export {
	nullish__none_ as nullish__check_,
}
