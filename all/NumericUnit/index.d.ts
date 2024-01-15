import type { TagType } from '../TagType/index.js'
// From https://github.com/Microsoft/TypeScript/issues/364#issuecomment-719046161
export type NumericUnit<S> = TagType<number, S>
export { NumericUnit as NumberUnit }
