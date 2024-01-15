export declare function prototype_mixin<
	target_T extends { prototype:object },
	source_T extends { prototype:object },
	out_T extends { prototype:object } =
		target_T&{ prototype:target_T['prototype']&source_T['prototype'] },
>(
	target:target_T,
	source:source_T
):out_T
