/** @type {typeof import('../date/index.d.ts').date_} */
export const date_ =
	(...arg_a)=>
		new Date(/** @type {any} */...arg_a)
export { date_ as _date, }
