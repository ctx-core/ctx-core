export class Timeout extends Error {
	constructor(ms_OR_message) {
		super(
			typeof ms_OR_message === 'number'
				? 'Timeout ' + ms_OR_message + 'ms'
				: ms_OR_message)
	}
}
