import type { NoRepetition } from '../NoRepetition/index.js'
export type UnorderedTuple<
	MemberA extends unknown[] = unknown[]
> = NoRepetition<string, MemberA>
