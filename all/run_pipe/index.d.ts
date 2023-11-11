export function run_pipe<A>(_:()=>A):A
export function run_pipe<A, B>(_:()=>A, _0:($:A)=>B):B
export function run_pipe<A, B, C>(_:()=>A, _0:($:A)=>B, _1:($:B)=>C):C
export function run_pipe<A, B, C, D>(_:()=>A, _0:($:A)=>B, _1:($:B)=>C, _2:($:C)=>D):D
export function run_pipe<A, B, C, D, E>(_:()=>A, _0:($:A)=>B, _1:($:B)=>C, _2:($:C)=>D, _3:($:D)=>E):E
export function run_pipe<A, B, C, D, E, F>(_:()=>A, _0:($:A)=>B, _1:($:B)=>C, _2:($:C)=>D, _3:($:D)=>E, _4:($:E)=>F):F
export function run_pipe<A, B, C, D, E, F, G>(
	_:()=>A,
	_0:($:A)=>B,
	_1:($:B)=>C,
	_2:($:C)=>D,
	_3:($:D)=>E,
	_4:($:E)=>F,
	_5:($:F)=>G
):G
export function run_pipe<A, B, C, D, E, F, G, H>(
	_:()=>A,
	_0:($:A)=>B,
	_1:($:B)=>C,
	_2:($:C)=>D,
	_3:($:D)=>E,
	_4:($:E)=>F,
	_5:($:F)=>G,
	_6:($:G)=>H
):H
export function run_pipe<A, B, C, D, E, F, G, H, I>(
	_:()=>A,
	_0:($:A)=>B,
	_1:($:B)=>C,
	_2:($:C)=>D,
	_3:($:D)=>E,
	_4:($:E)=>F,
	_5:($:F)=>G,
	_6:($:G)=>H,
	_7:($:H)=>I
):I
export function run_pipe<A, B, C, D, E, F, G, H, I, J>(
	_:()=>A,
	_0:($:A)=>B,
	_1:($:B)=>C,
	_2:($:C)=>D,
	_3:($:D)=>E,
	_4:($:E)=>F,
	_5:($:F)=>G,
	_6:($:G)=>H,
	_7:($:H)=>I,
	_8:($:I)=>J
):J
export function run_pipe<A, B, C, D, E, F, G, H, I, J, K>(
	_:()=>A,
	_0:($:A)=>B,
	_1:($:B)=>C,
	_2:($:C)=>D,
	_3:($:D)=>E,
	_4:($:E)=>F,
	_5:($:F)=>G,
	_6:($:G)=>H,
	_7:($:H)=>I,
	_8:($:I)=>J,
	...arg_a:(($:any)=>any)[]
):K
