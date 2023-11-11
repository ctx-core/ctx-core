export declare function prototype_mixin<
	target_T extends Function&{ prototype:object },
	source_T extends Function&{ prototype:object },
	out_T extends Function&{ prototype:object } = target_T&{ prototype:target_T['prototype']&source_T['prototype'] },
>(
	target:target_T,
	source:source_T
):out_T
