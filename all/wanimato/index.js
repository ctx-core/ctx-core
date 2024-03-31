/**
 * @param {sig_T<wanimato_T|nullish>}$
 * @param {Element}el
 * @param {(el:Element)=>Animation}animation_
 * @returns {wanimato_T}
 */
export function wanimato__new($, el, animation_) {
	if ($.val?.el === el) return $.val
	let _animation = animation_(el)
	_animation.addEventListener('finish', ()=>{
		$._ = {
			...$(),
			is_finish: true,
			finish_currentTime: $().animation.currentTime
		}
	})
	_animation.addEventListener('remove', ()=>{
		$._ = {
			...$(),
			is_remove: true
		}
	})
	let play_state__ensure = ()=>{
		if ($().is_play !== true || $().is_finish !== false) {
			$._ = {
				...$(),
				is_play: true,
				is_finish: false
			}
		}
	}
	let begin_state__ensure__setTimeout = ()=>{
		setTimeout(
			()=>{
				if ($().is_play !== !!_animation.currentTime || $().is_finish !== false) {
					$._ = {
						...$(),
						is_play: !!_animation.currentTime,
						is_finish: false,
					}
				}
			},
			_animation.currentTime / -_animation.playbackRate)
	}
	let animation_mixin = {
		play() {
			if (_animation.playbackRate < 0) {
				this.reverse()
			} else {
				_animation.play()
				play_state__ensure()
				if (_animation.playbackRate < 0) {
					begin_state__ensure__setTimeout()
				}
			}
		},
		reverse() {
			_animation.reverse()
			play_state__ensure()
			begin_state__ensure__setTimeout()
		},
		finish() {
			_animation.finish()
			if ($().is_play !== false || $().is_finish !== !!_animation.currentTime) {
				$._ = {
					...$(),
					is_play: false,
					is_finish: !!_animation.currentTime
				}
			}
		},
		cancel() {
			_animation.cancel()
			if ($().is_play !== false || $().is_finish !== false) {
				$._ = {
					...$(),
					is_play: false,
					is_finish: false
				}
			}
		},
		updatePlaybackRate(playbackRate) {
			_animation.updatePlaybackRate(playbackRate)
			_animation.ready
				.then(()=>{
					if (_animation.playbackRate < 0) {
						begin_state__ensure__setTimeout()
					}
				})
		},
		addEventListener(...arg_a) {
			_animation.addEventListener(...arg_a)
		},
		removeEventListener(...arg_a) {
			_animation.removeEventListener(...arg_a)
		},
	}
	return {
		el,
		animation: new Proxy(_animation, {
			get(_animation, /** @type {keyof Animation} */prop) {
				return animation_mixin[prop] ?? _animation[prop]
			},
			set(
				_animation,
				/** @type {keyof Omit<Animation, 'finished'|'pending'|'playState'|'ready'|'replaceState'>} */
				prop,
				val
			) {
				if (prop === 'playbackRate') {
					if (_animation[prop] === val) return false
					_animation[prop] = val
					if (val < 0) {
						begin_state__ensure__setTimeout()
					}
					return true
				}
				if (_animation[prop] === val) return false
				_animation[prop] = val
				return true
			}
		}),
		is_play: true,
		is_finish: false,
		finish_currentTime: null,
		is_remove: false,
	}
}
