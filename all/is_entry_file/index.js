import { process_release_name } from '../process_release_name/index.js'
export function is_entry_file_(url, entry_path) {
	if (!process_release_name) return false
	return (
		import('node:path').then(({ resolve })=>
			new URL(url).pathname === resolve(entry_path ?? process.argv[1]))
	)
}
