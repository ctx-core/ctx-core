/**
 * Returns obj with zipped val_o
 */
export declare function zip_o_<
	Obj extends object = object
>(
	key_a:(keyof Obj)[],
	val_a:Obj[keyof Obj][]
):Obj
export {
	zip_o_ as zip_h_,
	zip_o_ as zip_ctx_,
	zip_o_ as _zip_ctx,
	zip_o_ as _ctx__zip,
}
