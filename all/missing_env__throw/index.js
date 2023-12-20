import { error_o__throw } from '../error_o/index.js'
/**
 * Throws an error for a missing env variable
 * @param {string}env_name
 */
export function missing_env__throw(env_name) {
	const error_message = `
${env_name} environment variable not set.
dev: make sure ${env_name} is set in your .env file
heroku: make sure ${env_name} is set using \`heroku config:set\`
	`.trim()
	error_o__throw(error_message, {
		type: 'missing_env',
	})
}
export {
	missing_env__throw as throw_missing_env,
	missing_env__throw as throw__missing__env,
}
