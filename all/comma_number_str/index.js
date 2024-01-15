export function comma_number_str_(number) {
	return (
		number == null
			? null
			: number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
	)
}
export { comma_number_str_ as _comma_number_str, comma_number_str_ as format__commas, }
