/**
 * Return a compare function to sort on key values.
 */
export declare function key_compare_<
	Obj extends object|readonly unknown[] = object
>(
	key:keyof Obj, asc?:boolean
):(a:Obj, b:Obj)=>number
export {
	key_compare_ as _key_compare,
	key_compare_ as _compare__key,
	key_compare_ as _sort__key,
	key_compare_ as _sort__key__a1,
}
