/**
 * splice out any `array` elements matching `selector`
 */
export declare function selector_splice<I, O extends unknown[] = I[]>(
	a:readonly I[],
	selector:(v:I, i:number, a:readonly I[])=>I
):O
export {
	selector_splice as splice__selector,
	selector_splice as splice__selector__a1,
}
