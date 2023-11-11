/**
 * Assign only if obj is not null
 */
export declare function assign_unless_null<
	O extends object = object
>(obj:O, ...arg_a:Partial<O>[]):O|undefined
export { assign_unless_null as assign__unless__null }
