/// <reference types="ctx-core" />
import { ctx__get } from '../be_/index.js'
/**
 * @param {Ctx_wide_T<''>}ctx
 */
export function window__ctx__set(ctx) {
	window.ctx = ctx
	/**
	 * @param {string}key
	 * @param {string}[ns]
	 * @returns {unknown}
	 */
	window.ctx__get = (key, ns)=>{
		return ctx__get(window.ctx, key, ns)
	}
	/**
	 * @param {string}key
	 * @param {string}[ns]
	 * @returns {unknown}
	 */
	window.ctx__get_ = (key, ns)=>{
		return ctx__get(window.ctx, key, ns)()
	}
}
