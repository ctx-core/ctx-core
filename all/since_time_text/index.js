import { day_seconds } from '../day_seconds/index.js'
import { hour_seconds } from '../hour_seconds/index.js'
import { minute_seconds } from '../minute_seconds/index.js'
import { month_seconds } from '../month_seconds/index.js'
import { year_seconds } from '../year_seconds/index.js'
/**
 * @param {Date}date
 * @returns {string}
 * @see {@link https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site#answer-3177838}
 */
export function since_time_text_(date) {
	const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
	let interval = Math.floor(seconds / year_seconds)
	if (interval > 1) {
		return `${interval} years`
	}
	interval = Math.floor(seconds / month_seconds)
	if (interval > 1) {
		return `${interval} months`
	}
	interval = Math.floor(seconds / day_seconds)
	if (interval > 1) {
		return `${interval} days`
	}
	interval = Math.floor(seconds / hour_seconds)
	if (interval > 1) {
		return `${interval} hours`
	}
	interval = Math.floor(seconds / minute_seconds)
	if (interval > 1) {
		return `${interval} minutes`
	}
	return `${Math.floor(seconds)} seconds`
}
export {
	since_time_text_ as _since_time_text,
	since_time_text_ as _text__time__since,
}
