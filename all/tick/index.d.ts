/**
 * Calls setTimeout
 */
export declare function tick<Out>(fn?:()=>Out, timeout?:number):Promise<Out|undefined>
