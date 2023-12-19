/**
 * Mixin properties from source_a into target
 * @example
 * mixin(obj, {
 *        get foo() {
 *            return 'bar.js'
 *        }
 *    })
 */
export declare function mixin<I, O = I>(target:I, ...source_a:O[]):I
