export function html_attr_val_(...raw_val_a) {
	let html_attr_val = ''
	for (let raw_val of raw_val_a.flat(Infinity)) {
		html_attr_val +=
			raw_val == null
				? ''
				: (
					html_attr_val
						? ' '
						: ''
				) + raw_val
	}
	return html_attr_val
}
