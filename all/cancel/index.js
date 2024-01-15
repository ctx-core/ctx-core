export class Cancel extends Error {
	constructor(config) {
		super(config?.message ?? 'Cancel')
		this.returns = config?.returns
	}
}
