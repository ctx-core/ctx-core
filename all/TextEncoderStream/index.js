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
// TODO: Remove when https://github.com/oven-sh/bun/issues/5648 is implemented
export class TextEncoderStream extends TransformStream {
	constructor() {
		const decoder = new TextEncoder()
		super({
			transform(chunk, controller) {
				const encoded = decoder.encode(chunk)
				if (encoded.length > 0) {
					controller.enqueue(encoded)
				}
			},
			flush(controller) {
				// If {fatal: false} is in options (the default), then the final call to
				// decode() can produce extra output (usually the unicode replacement
				// character 0xFFFD). When fatal is true, this call is just used for its
				// side-effect of throwing a TypeError exception if the input is
				// incomplete.
				const output = decoder.encode()
				if (output.length > 0) {
					controller.enqueue(output)
				}
			}
		})
	}
}
