/// <reference lib="dom" />
import { Encoding } from 'node:crypto'
export class TextDecoderStream extends TransformStream<Uint8Array, string> {
	readonly encoding:string
	readonly fatal:boolean
	readonly ignoreBOM:boolean
	constructor(
		encoding?:Encoding,
		params?:ConstructorParameters<typeof TextDecoder>[1]
	)
}
