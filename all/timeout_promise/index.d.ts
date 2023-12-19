/**
 * @see {@link https://italonascimento.github.io/applying-a-timeout-to-your-promises/}
 * @see {@link http://disq.us/p/1k8w63m}
 */
export declare function timeout_promise<O>(ms:number, promise:Promise<O>):Promise<O>
export { timeout_promise as _timeout_promise }
