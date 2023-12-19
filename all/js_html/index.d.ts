/**
 * html for js script tags
 */
export declare function js_html_(params:js_html__params_T):string
export interface js_html__params_T {
	js:string[]
	script:string[]
	indentation:string
}
export type js_html__opts_T = js_html__params_T
export {
	js_html_ as _js_html,
	js_html_ as _html__js,
}
