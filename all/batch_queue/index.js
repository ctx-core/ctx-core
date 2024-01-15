import { queue_ } from '../queue/index.js'
const default_queue_size = 4
export function batch_queue_(queue_size = default_queue_size, batch_queue_size = queue_size) {
	if (!queue_size) queue_size = default_queue_size
	if (!batch_queue_size) batch_queue_size = queue_size
	const queue = queue_(queue_size)
	const pending_set = new Set()
	const waiting_fifo = []
	return {
		add(fn) {
			if (pending_set.size < batch_queue_size) {
				return Promise.resolve([fn, pending_promise_(fn)])
			} else {
				return new Promise(resolve=>{
					waiting_fifo.push(()=>{
						resolve([fn, pending_promise_(fn)])
					})
				})
			}
		},
		close() {
			return queue.close()
		}
	}
	function pending_promise_(fn) {
		const pending_promise = queue.add(fn).then(v=>{
			try {
				return v
			} finally {
				next(pending_promise)
			}
		}).catch(()=>{
			next(pending_promise)
		})
		pending_set.add(pending_promise)
		return pending_promise
	}
	function next(pending_promise) {
		pending_set.delete(pending_promise)
		if (waiting_fifo.length) {
			waiting_fifo.shift()()
		}
	}
}
