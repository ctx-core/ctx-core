/**
 * Return a compare function to sort on key values.
 * @param {Object|unknown[]}key
 * @param {boolean}asc
 * @returns {(a:Object|unknown[], b:Object|unknown[])=>number}
 */
export function key_compare_(key, asc = true) {
	return (a, b)=>{
		if (a[key] < b[key]) return asc ? -1 : 1
		if (a[key] > b[key]) return asc ? 1 : -1
		return 0
	}
}
export {
	key_compare_ as _key_compare,
	key_compare_ as _compare__key,
	key_compare_ as _sort__key,
	key_compare_ as _sort__key__a1,
}
