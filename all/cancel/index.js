export class Cancel extends Error {
	constructor(config) {
		super(config?.message ?? 'Cancel')
		this.name = 'Cancel'
		this.returns = config?.returns
	}
}
export function promise__cancel(promise) {
	promise.cancel?.()
	promise.catch(()=>{})
	return promise
}
export function promise__cancel__throw(promise) {
	promise.cancel?.()
	promise.catch(()=>{})
	throw new Cancel
}
