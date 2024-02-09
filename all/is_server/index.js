import { is_browser_ } from '../is_browser/index.js'
export function is_server_() {
	return !is_browser_()
}
