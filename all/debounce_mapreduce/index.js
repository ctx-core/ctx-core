/**
 * @template A
 * @template MapVal
 * @param {()=>A}arg_
 * @param {(arg_a:A)=>Promise<MapVal>}map
 * @param {(v0_arg:A, v1_arg:A)=>boolean}arg_match_
 * @param {(val:MapVal, arg_a:A)=>void}reduce
 * @returns {Promise<void>}
 */
export async function debounce_mapreduce(
	arg_, map, arg_match_, reduce
) {
	const arg = arg_()
	const map_val = await map(arg)
	if (arg_match_(arg, arg_())) {
		reduce(map_val, arg)
	}
}
