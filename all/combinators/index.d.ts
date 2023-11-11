/**
 * @see {@link https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45}
 */
export declare function I<
	X extends unknown = unknown
>(x:X):X
export declare function K<
	X extends unknown = unknown
>(x:X):(_:any)=>X
export declare function A<
	X extends unknown = unknown,
	O extends unknown = unknown
>(f:(x:X)=>O):(x:X)=>O
export declare function T<
	X extends unknown = unknown,
	O extends unknown = unknown
>(x:X):(f:(x:X)=>O)=>O
export declare function W<
	X extends unknown = unknown,
	O extends unknown = unknown
>(f:(x:X)=>(x:X)=>O):(x:X)=>O
export declare function C<
	X extends unknown = unknown,
	Y extends unknown = unknown,
	O extends unknown = unknown
>(f:(x:X)=>(y:Y)=>O):(y:Y)=>(x:X)=>O
export declare function B<
	X extends unknown = unknown,
	Og extends unknown = unknown,
	O extends unknown = unknown
>(f:(og:Og)=>O):(g:(x:X)=>Og)=>(x:X)=>O
export declare function S<
	X extends unknown = unknown,
	Og extends unknown = unknown,
	O extends unknown = unknown
>(f:(x:X)=>(og:Og)=>O):(g:(x:X)=>Og)=>(x:X)=>O
export declare function P<
	X extends unknown = unknown,
	Y extends unknown = unknown,
	Ogx extends unknown = unknown,
	Ogy extends unknown = unknown,
	O extends unknown = unknown
>(f:(ogx:Ogx)=>(ogy:Ogy)=>O):(g:(a:(X|Y))=>(Ogx|Ogy))=>(x:X)=>(y:Y)=>O
export declare function Y<
	X extends unknown = unknown,
	Of extends unknown = unknown,
	Off extends unknown = unknown
>(f:(ff:(x:X)=>Of)=>Off):Off
export declare function I__<
	O extends unknown = unknown,
	R extends unknown = unknown
>(x:O, ..._:R[]):O
