/**
 * @see {@link https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45}
 */ // export const I = x=>x
export function I(x) {
	return x
}
// export const K = x=>_=>x
export function K(x) {
	return (_)=>x
}
// export const A = f=>x=>f(x)
export function A(f) {
	return (x)=>f(x)
}
// export const T = x=>f=>f(x)
export function T(x) {
	return (f)=>f(x)
}
// export const W = f=>x=>f(x)(x)
export function W(f) {
	return (x)=>f(x)(x)
}
// export const C = f=>y=>x=>f(x)(y)
export function C(f) {
	return (y)=>(x)=>f(x)(y)
}
// export const B = f=>g=>x=>f(g(x))
export function B(f) {
	return (g)=>(x)=>f(g(x))
}
// export const S = f=>g=>x=>f(x)(g(x))
export function S(f) {
	return (g)=>(x)=>f(x)(g(x))
}
// export const P = f=>g=>x=>y=>f(g(x))(g(y))
export function P(f) {
	return (g)=>(x)=>(y)=>f(g(x))(g(y))
}
// export const Y = (f)=>(g=>g(g))(g=>f(x=>g(g)(x)))
export function Y(f) {
	return ((g)=>g(g)
	)((g)=>f((x)=>g(g)(x)
		)
	)
}
export function I__(x, ..._) {
	return x
}
