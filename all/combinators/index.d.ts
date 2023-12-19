/**
 * @see {@link https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45}
 */
export declare function I<X>(x:X):X
export declare function K<X>(x:X):(_:unknown)=>X
export declare function A<X, O>(f:(x:X)=>O):(x:X)=>O
export declare function T<X, O>(x:X):(f:(x:X)=>O)=>O
export declare function W<X, O>(f:(x:X)=>(x:X)=>O):(x:X)=>O
export declare function C<X, Y, O>(f:(x:X)=>(y:Y)=>O):(y:Y)=>(x:X)=>O
export declare function B<X, Og, O>(f:(og:Og)=>O):(g:(x:X)=>Og)=>(x:X)=>O
export declare function S<X, Og, O>(f:(x:X)=>(og:Og)=>O):(g:(x:X)=>Og)=>(x:X)=>O
export declare function P<X, Y, Ogx, Ogy, O>(
	f:(ogx:Ogx)=>(ogy:Ogy)=>O):(g:(a:(X|Y))=>(Ogx|Ogy))=>(x:X)=>(y:Y)=>O
export declare function Y<X, Of, Off>(f:(ff:(x:X)=>Of)=>Off):Off
export declare function I__<O, R>(x:O, ..._:R[]):O
