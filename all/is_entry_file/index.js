import { resolve } from 'node:path'
export function is_entry_file_(url, entry_path) {
	return new URL(url).pathname === resolve(entry_path ?? process.argv[1])
}
