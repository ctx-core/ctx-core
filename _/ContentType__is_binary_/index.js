const is_binary__regex =
	/^(image\/[^(svg)]|audio\/|video\/|application\/(pdf|zip|vnd.|msword|x-shockwave-flash|java-archive))/
/**
 * @param ContentType{string}
 * @return {boolean}
 */
export function ContentType__is_binary_(ContentType) {
	return is_binary__regex.test(ContentType)
}
