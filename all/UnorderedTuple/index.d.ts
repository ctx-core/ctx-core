import type { NoRepetition } from '../NoRepetition/index.js'
export type UnorderedTuple<
	MemberA extends any[] = any[]
> = NoRepetition<string, MemberA>
