// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// Polyfill for TextEncoderStream and TextDecoderStream
// Modified by Sukka (https://skk.moe) to increase compatibility and performance with Bun.
// TODO: Remove when https://github.com/oven-sh/bun/issues/5648 is implemented
export class TextDecoderStream extends TransformStream {
	constructor(
		encoding = 'utf-8',
		{
			fatal = false,
			ignoreBOM = false,
		} = {},
	) {
		const decoder = new TextDecoder(encoding, { fatal, ignoreBOM })
		super({
			transform(chunk, controller) {
				const decoded = decoder.decode(chunk)
				if (decoded.length > 0) {
					controller.enqueue(decoded)
				}
			},
		})
		this.encoding = encoding
		this.fatal = fatal
		this.ignoreBOM = ignoreBOM
	}
}
