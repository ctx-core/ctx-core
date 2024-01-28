export function import_meta_env_<R extends import_meta_env_T>():R
export function import_meta_env__ensure<R extends import_meta_env_T>():R
declare global {
	interface import_meta_T {
		readonly env:import_meta_env_T
	}
}
interface import_meta_env_T {
	[key:string]:string
}
