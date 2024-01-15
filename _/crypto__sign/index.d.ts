export declare function crypto__sign(
	algorithm:crypto__sign__algorithm_T,
	key:CryptoKey,
	data:BufferSource|string
):Promise<ArrayBuffer>
export type crypto__sign__algorithm_T =
	'RSASSA-PKCS1-v1_5'
	|'RSA-PSS'
	|'ECDSA'
	|'HMAC'
	|Algorithm
	|RsaPssParams
	|EcdsaParams
