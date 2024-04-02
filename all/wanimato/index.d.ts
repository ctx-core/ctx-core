import type { nullish } from '../nullish/index.js'
import type { memo_T } from '../rmemo/index.js'
export declare function wanimato__new<E extends Element>(
	$:memo_T<wanimato_T>|memo_T<wanimato_T|nullish>,
	el:E,
	animation_:(el:E)=>Animation
):wanimato_T
export type wanimato_T = {
	animation:Animation
	el:Element
	is_play:boolean
	is_finish:boolean
	finish_currentTime:number|null
	is_remove:boolean
}
