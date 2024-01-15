export type promise_resolve_T<T> = (value:T|PromiseLike<T>)=>void
export type promise_reject_T = (reason?:unknown)=>void
export type cancel_Promise<
	V,
	cancel_fn_T extends (
		|(()=>Promise<V>)
		|((val:V)=>Promise<V>)
	)
> =
	&Promise<V>
	&{ cancel:cancel_fn_T }
