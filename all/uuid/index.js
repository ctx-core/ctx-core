//https://gist.github.com/LeverOne/1308368
export function uuid_() {
	let a = 0, b = ''
	for (
		;
		a++ < 36;
		b += a * 51 & 52 // if "a" is not 9 or 14 or 19 or 24
			? (a ^ 15 // if "a" is not 15
					? 8 ^ Math.random() * (a ^ 20 ? 16 : 4 // unless "a" is 20, in which case a random number from 8 to 11
				) : 4 //	otherwise 4
			).toString(16) : '-' //	in other cases (if "a" is 9,14,19,24) insert "-"
	) {
	}
	return b
}
export {
	uuid_ as _uuid,
	uuid_ as uuid,
}
