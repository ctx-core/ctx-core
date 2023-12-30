export function hex__base64_(hex) {
	let str = ''
	for (let i = 0; i < hex.length; i += 2)
		str += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16))
	return btoa(str)
}
