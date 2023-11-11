import { noop } from '../noop/index.js'
const default_queue_size = 4
/**
 * @param queue_size
 * @returns {queue_T}
 * @private
 */
export function queue_(
	queue_size = default_queue_size
) {
	if (!queue_size) queue_size = default_queue_size
	const waiting_a = []
	let pending = 0
	let closed = false
	let close__resolve
	let cancelled = false
	/** @type {Set<(item_count:number)=>void>} */
	const throttle__subscriber_S = new Set()
	let processed__count = 0
	return /** @type {queue_T} */{
		add(fn) {
			if (closed) {
				throw new Error('Cannot add to a closed queue')
			}
			return new Promise((resolve, reject)=>{
				waiting_a.push({ fn, resolve, reject })
				throttle__notify()
				dequeue()
			})
		},
		add_sync(fn) {
			if (closed) {
				throw new Error('Cannot add to a closed queue')
			}
			waiting_a.push({ fn, resolve: noop, reject: noop })
			throttle__notify()
			dequeue()
			return item_count_()
		},
		close() {
			closed = true
			return new Promise(resolve=>{
				if (pending) {
					close__resolve = resolve
				} else {
					resolve(processed__count)
				}
			})
		},
		cancel() {
			closed = true
			cancelled = true
			if (close__resolve) close__resolve(processed__count)
			return pending
		},
		get pending() {
			return pending
		},
		get item_count() {
			return item_count_()
		},
		/**
		 * @param {number|((item_count:number)=>boolean)}max_item_count_OR_throttle__continue_
		 * @returns {Promise<number>}
		 */
		throttle(max_item_count_OR_throttle__continue_) {
			const throttle__continue_ =
				typeof max_item_count_OR_throttle__continue_ === 'function'
					? max_item_count_OR_throttle__continue_
					: item_count=>item_count <= max_item_count_OR_throttle__continue_
			let resolve
			const pending__wait__promise =
				new Promise(res=>{
					resolve = res
				})
			const throttle__subscriber =
				item_count=>{
					if (throttle__continue_(item_count)) {
						throttle__subscriber_S.delete(throttle__subscriber)
						resolve(item_count)
					}
				}
			throttle__subscriber_S.add(throttle__subscriber)
			throttle__subscriber(item_count_())
			return pending__wait__promise
		}
	}
	function item_count_() {
		return pending + waiting_a.length
	}
	function dequeue() {
		if (cancelled) return
		if (pending >= queue_size) return
		if (!waiting_a.length) {
			if (!pending && close__resolve) close__resolve(processed__count)
			return
		}
		pending++
		const { fn, resolve, reject } = waiting_a.shift()
		const promise = fn()
		try {
			promise
				.then($res=>{
					if (!cancelled) return resolve($res)
				}, $rej=>{
					if (!cancelled) return reject($rej)
				})
				.then(()=>{
					processed__count++
					if (!cancelled) pending__decrement()
					dequeue()
				})
		} catch (err) {
			reject(err)
			pending__decrement()
			dequeue()
		}
		dequeue()
	}
	function pending__decrement() {
		pending--
		throttle__notify()
	}
	function throttle__notify() {
		const item_count = item_count_()
		throttle__subscriber_S.forEach(throttle__subscriber=>
			throttle__subscriber(item_count))
	}
}
export { queue_ as _queue, }
