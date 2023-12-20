export function import_meta_env_<R extends ImportMetaEnv>():R
export function import_meta_env__ensure<R extends ImportMetaEnv>():R
declare global {
	interface ImportMeta {
		readonly env:ImportMetaEnv
	}
}
interface ImportMetaEnv {
	[key:string]:string
}
