/**
 * Returns an array of objects with [pick](#pick) applied.
 */
export declare function pick_val_a_<
	Obj extends object = object
>(
	obj:Obj,
	...key_a:(keyof Obj)[]
):Obj[keyof Obj][]|undefined
export {
	pick_val_a_ as pick_value_a_,
	pick_val_a_ as _pick_value_a1,
	pick_val_a_ as _a1__value__pick,
}
