/** @typedef {import('./index.d.ts').rmemo_def_T} */
/** @typedef {import('./index.d.ts').memo_T} */
/** @typedef {import('./index.d.ts').rmemo_subscriber_T} */
/** @typedef {import('./index.d.ts').sig_T} */
/** @type {WeakRef<memo_T>} */
let cur_rmr
/** @type {Set<()=>unknown>} */
let queue = new Set
/**
 * @param {rmemo_def_T}rmemo_def
 * @param {rmemo_subscriber_T<unknown>[]}subscriber_a
 * @returns {memo_T}
 * @private
 */
export function memo_(rmemo_def, ...subscriber_a) {
	let refresh
	let rmrs
	let memo = ()=>{
		if (!('val' in memo)) {
			refresh()
		}
		if (cur_rmr) {
			let cur_rmr_refresh = cur_rmr.deref()
			~rmrs.indexOf(cur_rmr) || rmrs.push(cur_rmr)
			cur_rmr_refresh.l < refresh.l + 1 && (cur_rmr_refresh.l = refresh.l + 1)
			// conditional in rmr calls this r_memo
			cur_rmr_refresh.s.push(memo)
			// prevent this rmemo from GC while cur_rmr is still active
			~cur_rmr_refresh.S.indexOf(memo) || cur_rmr_refresh.S.push(memo)
		}
		return memo.val
	}
	Object.defineProperty(memo, '_', {
		get: memo,
		set: val=>{
			if (memo.val !== val) {
				memo.val = val // val is available for other purposes
				let run_queue = !queue.size
				let i = 0
				for (let rmr of rmrs) {
					val = rmr.deref() // val is no longer used...saving bytes
					if (!val) {
						rmrs.splice(i, 1)
					} else if (~val.s.indexOf(memo)) { // if conditional rmr refresh calls this r_memo, add to queue
						queue.add(val)
					}
					i++
				}
				// add reference to subscribers to prevent GC
				memo._s ||=
					subscriber_a.map(subscriber=>
						memo_(subscriber$=>(
							subscriber(memo),
							subscriber$
						))())
				if (run_queue) {
					cur_refresh_loop:for (let cur_refresh of queue) {
						queue.delete(cur_refresh)
						for (let queue_refresh of queue) {
							if (cur_refresh.l > queue_refresh.l) {
								queue.add(cur_refresh)
								continue cur_refresh_loop
							}
						}
						cur_refresh()
					}
				}
			}
		},
	})
	refresh = ()=>{
		let prev_rmr = cur_rmr
		cur_rmr = memo.rmr
		refresh.s = []
		try {
			memo._ = rmemo_def(memo)
		} catch (err) {
			console.error(err)
		}
		cur_rmr = prev_rmr // finally is not necessary...catch does not throw
	}
	refresh.l = 0
	// rmrs = new Set
	// memo.rmrs is kept for GC testing/debugging purposes...small size increase
	memo.rmrs = rmrs = []
	memo.rmr = new WeakRef(refresh)
	refresh.s = []
	refresh.S = []
	return memo
}
export { memo_ as memosig_ }
/**
 * @param {unknown}init_val
 * @param {rmemo_subscriber_T[]}subscriber_a
 * @returns {sig_T}
 * @private
 */
export function sig_(init_val, ...subscriber_a) {
	return memo_(rw_rmemo=>
		'val' in rw_rmemo
			? rw_rmemo.val
			: init_val,
	...subscriber_a)
}
