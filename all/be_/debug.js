import { be_ } from './index.js'
export function be__debug() {
  be_.argv__debug = argv__ctx=>{
	  if (!argv__ctx) {
	  	throw new Error(`be: no Ctx`)
	  }
  }
	be_.source__debug = ctx=>{
		if (!ctx) {
			throw new Error(
				`be: ${String(id)}: no is_source_ returns true`)
		}
	}
	be_.pending__debug = pending=>{
		if (pending.get(be)) {
			throw new Error(
				`be_: ${
					String(id)
				}: circular:\n${pending.values().map(pending_value=>
					typeof pending_value === 'string'
						? pending_value
						: 'Function').join('\n')}`)
		}
	}
}
