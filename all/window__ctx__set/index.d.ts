import { type Ctx_wide_T } from '../be_/index.js'
export declare function window__ctx__set(ctx:Ctx_wide_T<''>):void
declare global {
	interface Window {
		ctx__get<V>(key:string, ns?:string):V
		ctx__get_<V>(key:string, ns?:string):V
	}
}
