export declare const date_:Date__T
export interface Date__T {
	():Date
	(value:number|string|Date):Date
	(
		year:number,
		month:number,
		date?:number,
		hours?:number,
		minutes?:number,
		seconds?:number,
		ms?:number
	):Date
}
export { date_ as _date, }
