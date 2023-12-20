# ctx-core

## 5.2.1

### Patch Changes

- rmemo: fix: type errors

## 5.2.0

### Minor Changes

- minor:

      exports:
      	+ ./cli-args
      	+ ./env
      + ctx__clear
      + ondelete_be_
      + ondelete_be__val__new_T
      be_: disable circular reference guard:
      	can be enabled by running @ctx-core/preprocess with DEBUG env variable:
      		see test: 'be_|circular dependency|DEBUG=1'
      + CACHE_VERSION
      	+ CACHE_VERSION$_
      	+ CACHE_VERSION_
      	+ CACHE_VERSION__set
      + NODE_ENV
      	+ NODE_ENV$_
      	+ NODE_ENV_
      	+ NODE_ENV__set
      + VERSION
      	+ VERSION$_
      	+ VERSION_
      	+ VERSION__set
      + arg_a__pick
      + default_arg_a_
      + param_dfn_T
      + dfn_flag_r_
      + dfn_flag_r_
      + flag_a_
      + flag_r_
      + flag_r__pick
      + flag_r_arg_a_
      + flag_r_param_name_
      + flag_regex
      + import_meta_env_
      + import_meta_env__ensure
      + is_development
      	+ is_development$_
      	+ is_development_
      + is_production
      	+ is_production$_
      	+ is_production_
      + is_staging
      	+ is_staging$_
      	+ is_staging_
      + missing_env__throw
      + param_dfn_a_reducer
      + param_dfn_split_regex
      + param_name_r_param_val_a_
      + param_r_
      + parseFloat_andor_

  size-limit:

      be_: - 5 B
      be_ ctx_: - 2 B
      be_ ns_ctx_: - 1 B
      be_ ctx_ ns_ctx_: - 1 B
      memo_: - 4 B
      memo_ sig_ be_ ctx_ be_memo_pair_ be_sig_triple_: - 4 B

## 5.1.0

### Minor Changes

- minor:

      exports:
      	./array: + flatten
      	+ ./deep_equal
      	+ ./html
      + deep_equal
      + html_
      + html_attr_
      + attr_
      + raw__html_attr_
      + raw__attr_
      + html_attrs_
      + attrs_
      + html_class_
      + class_
      + html_dataset__data_attrs_
      + dataset__data_attrs_
      + html_attr_def_T
      + attr_def_T
      + html_style_
      + style_
      + html_style__assign
      + style__assign
      + html_styles_o_
      + styles_o
      + js_html_
      + js_html__params_T
      + links_html_
      + links_html__params_T

## 5.0.2

### Patch Changes

- fix: type errors

## 5.0.1

### Patch Changes

- fix: type errors

## 5.0.0

### Major Changes

- major: + Ctx ns (namespace):

      be_:
      Be:
      be_o_T:
      be_config_T
      Ctx:
      	generics: + ns_T
      	+ ns:ns_T
      	- is_source_
      be__has_:
      be_map__find:
      be__val_:
      be_lock_memosig_triple_:
      be_lock_memosig_triple_T:
      be_memo_pair_:
      be_memo_pair_T:
      be_memosig_triple_:
      be_memosig_triple_T:
      be_sig_triple_:
      be_sig_triple_T:
      	generics: + ns_T
      be: generics:
      	+ ns_T
      	+ ctx_T
      ctx__set:
      ctx__delete:
      	generics:
      		+ ns_T
      		+ ctx_T
      	arguments: + ns?:string
      ctx__new:
      ctx_:
      	returns Ctx<''>
      + BeMap
      + BeMapO
      + Ctx_wide_T
      + Ctx_s_T
      + Ctx_s_wide_T
      + ctx__be_T
      + ctx__get_T
      + ctx__set_T
      + ns_ctx__new
      rmemo: bundle size optimizations: .includes instead of .indexOf
      exports: + ./test
      + Expect
      + Equal
      TupleExclude: fix: type error
      + TupleMemberExtends
      + TupleValues
      + TupleConcat
      + TupleToUnion
      - be___T
      - be__return_T

  size-limit:

      ctx_: - 1 B
      ns_ctx_: - 38 B
      be_: - 43 B
      be_ ctx_: - 40 B
      be_ ns_ctx_: - 8 B
      be_ ctx_ ns_ctx_: - 8 B
      memo_: - 4 B
      memo_ sig_: - 5 B
      memo_ sig_ be_ ctx_: - 34 B
      memo_ sig_ be_ ctx_ be_memo_pair_ be_sig_triple_: - 35 B

## 4.19.0

### Minor Changes

- minor:

      + ./http
      + ContentType__is_binary_
      + CacheControl_1hour_headers_
      + CacheControl_5min_headers_
      + ContentType_json_headers_
      + ContentType_svg_headers_
      + ext_R_mime
      + http__headers__assign
      + internal_server_error__throw

## 4.18.0

### Minor Changes

- - tempfile*path*,tempfile\_

### Patch Changes

- rmemo_T: fix: + |lock_memosig_T<val_T>

## 4.17.0

### Minor Changes

- lock*memosig*: \_=: sets .lock = 1 to prevent the memo_def from running
- - lock_memosig_T

## 4.16.0

### Minor Changes

- pathname\_: returns undefined when url argument is nullish
- pathname\_: + argument: url: default: typeof window === 'object' && new URL(window.location.href)

## 4.15.0

### Minor Changes

- minor:

      + lock_memosig_
      + be_lock_memsig_
      + be_lock_memsig_T

  size-limit:

      memo_ sig_: + 1 B
      memo_ sig_ be_ ctx_ be_memo_pair_ be_sig_triple_: - 3 B

## 4.14.1

### Patch Changes

- - globalThis\__be_memo_pair_ type declaration

## 4.14.0

### Minor Changes

- fix: name collision: memo*→arg_memo*: rmemo memo\_ keeps the same name

## 4.13.0

### Minor Changes

- minor:

      be_:
      	store val into ctx as an id string or id as the be_...not both
      	fix: be with an id can be transplied multiple times & use the same ctx val as another transpiled be with the same id
      Be: id: string|Be

  size-limit:

      be_: - 15 B
      be_ ctx_: - 14 B
      memo_ sig_ be_ ctx_: - 12 B
      memo_ sig_ be_ ctx_ be_memo_pair_ be_sig_triple_: - 9 B

## 4.12.0

### Minor Changes

- globalThis\__be_: arguments match be\_

  size-limit:

      be_ ctx_: - 2 B

## 4.11.4

### Patch Changes

- globalThis\__be_: fix: arguments type: + config?:be_config_T

## 4.11.3

### Patch Changes

- globalThis\__be_: fix: id argument + config argument

  size-limit:

      be_ ctx_: + 2 B

## 4.11.2

### Patch Changes

- TupleExclude: fix: type inference

## 4.11.1

### Patch Changes

- TupleExclude: fix: type error

## 4.11.0

### Minor Changes

- minor:

      + TupleRest
      + TupleFirst
      + TupleExclude

### Patch Changes

- nullish\__none_: callback: exclude nullish from each argument

## 4.10.1

### Patch Changes

- be*memosig_triple*: fix: import

## 4.10.0

### Minor Changes

- minor:

      + .on: Call the rmemo & enable updates from it's parents.
      + .off: Disable updates from the rmemo's parents.

  size-limit:

      memo_: + 2 B
      memo_ sig_: + 1 B
      memo_ sig_ be_ ctx_ be_memo_pair_ be_sig_triple_: - 2 B

## 4.9.1

### Patch Changes

- fix: sig*,memosig*: subscribers are notified if sig is set before read

  size-limit:

      memo_: - 4 B
      memo_ sig_: - 3 B
      memo_ sig_ be_ ctx_: - 5 B
      memo_ sig_ be_ ctx_ be_memo_pair_ be_sig_triple_: + 3 B

## 4.9.0

### Minor Changes

- minor:

      + be_memosig_triple_,be_memosig_triple_T
      + sig argument in definition
      	a memo's ._ setter is active

  size-limit:

      memo_ sig_ be_ ctx_ be_memo_pair_ be_sig_triple_: - 8 B

## 4.8.2

### Patch Changes

- crypto\_: fix: export type
- crypto: fix: type definition

## 4.8.1

### Patch Changes

- memo\_: fix: run all listeners when a listener is garbage collected

  size-limit:

      memo_: - 2 B
      memo_ sig_: - 3 B
      memo_ sig_ be_ ctx_: - 8 B
      memo_ sig_ be_ ctx_ be_memo_pair_ be_sig_triple_: - 19 B

## 4.8.0

### Minor Changes

- no changes

## 4.7.0

### Minor Changes

- - rmemo\_\_wait

## 4.6.3

### Patch Changes

- be*memo_pair*: subscriber receives a memosig argument: allows memosig.\_ = val in subscriber

## 4.6.2

### Patch Changes

- minor: be*memo_pair*,be*sig_triple*: subscriber functions have get a ctx passed in:

      be_memo_pair_: (ctx:Ctx, memo:memo_T)
      be_sig_pair_: (ctx:Ctx, memo:sig_T)

  size-limit:

      memo_ sig_: + 1 B
      memo_ sig_ be_ ctx_ be_memo_pair_ be_sig_triple_: + 17 B

## 4.6.1

### Patch Changes

- fix: type inference:

      be_memo_triple_
      be_memo_triple_T
      be_sig_triple_
      be_sig_triple_T

## 4.6.0

### Minor Changes

- minor:

      memo_T,sig_T:
       .rmr→.r
       .rmrs→.memor

  patch:

      rmemo_:
      	undefined value: set .key = undefined to cache value: prevent refresh from being called again
      	performance: lazily instantiate WeakRef
      	size optimization: move memo.memor = after memo.f.* =
      	rmemo_: if statements instead of &&/||

  size-limit:

      memo_: + 1 B
      memo_ sig_: - 7 B
      memo_ sig_ be_ ctx_: - 3 B
      memo_ sig_ be_ ctx_ be_memo_pair_ be_sig_triple_: - 7 B

## 4.5.0

### Minor Changes

- minor: domain integrity: convert memo* & sig* matches memo interface: remove val argument from function:

      increases rmemo's bundle size & decreases downstream package (reljs) bundle size
      r_rmemo_→memo_:
      	.(): - val argument
      	+ readonly ._
      rw_rmemo_→sig_:
      	.(): - val argument
      	+ ._
      rwr_rmemo_→memosig_
      be_r_rmemo_pair_→be_memo_pair_
      be_r_rmemo_pair_T→be_memo_pair_T
      be_rw_rmemo_triple_→be_sig_triple_
      be_rw_rmemo_triple_T→be_sig_triple_T

  patch:

      memo_: performance optimization: array instead to Set:
      	memo.rmrs
      	refresh.s
      	refresh.S
      memo_T: rmrs is not optional

## 4.4.0

### Minor Changes

- r_rmemo\_: - .go
- - rwr*rmemo*: rw*rmemo* with a rmemo*def argument: same arguments as r_rmemo* but writable

### Patch Changes

- rw*rmemo*: use .val instead of .\_s & .\_v to query stored val:

      - ._s
      - ._v

- r*rmemo*: def: conditional logic: fix: keep reference to all parents to prevent parent GC

## 4.3.1

### Patch Changes

- rmemo: fix: types:

      r_rmemo_T<val_T>,rw_rmemo_T<val_T>: fix type:
      	object type instead of function
      	+ .get
      	+ .set
      - r_rmemo_o_T
      - r_rmemo_o_T

## 4.3.0

### Minor Changes

- r*rmemo*,rw*rmemo*: convert function to object: use .\_ getter/setter for value:

      ._rS→._rs

- r*rmemo*:

      .onset→._s: private callback
      move .go+._rs after ._ getter/setter
      + .get
      + .set

### Patch Changes

- rmemo\_: inline r_rmemo.\_r
- r*rmemo*: - cur_ref !== \_r check: redundant

## 4.2.1

### Patch Changes

- r*rmemo*: .\_r: fix: reference to r_rmemo instance:

      r_rmemo_ signal_: - 4 B
      r_rmemo_ signal_ be_ ctx_: + 3 B

## 4.2.0

### Minor Changes

- renames:

      rmemo_→r_rmemo_
      read_rmemo_T->r_rmemo_T
      read_rmemo_o_T->r_rmemo_o_T
      rsig_→rw_rmemo_
      readwrite_rmemo_T→rw_rmemo_T
      readwrite_rmemo_o_T→rw_rmemo_o_T
      be_rmemo_pair_→be_r_rmemo_pair_
      be_rmemo_pair_T→be_r_rmemo_pair_T
      be_rsig_triple_→be_rw_rmemo_triple_
      be_rsig_triple_T→be_rw_rmemo_triple_T

  r*rmemo*: store value in .val instead of .\_a

  size-limit:

      r_rmemo_: - 22 B
      r_rmemo_ signal_: - 22 B
      r_rmemo_ signal_ be_ ctx_: - 23 B
      r_rmemo_ signal_ be_ ctx_ be_rmemo_pair_ be_rsig_triple_: - 24 B

## 4.1.1

### Patch Changes

- be*rmemo_pair*,be*rsig_triple*: subscriber_a_THEN_config: fix: type

## 4.1.0

### Minor Changes

- MapCtx: + &{ is_ctx: true }
- - be**ctx\_: aliased by be**has\__ctx_
- be\_: - be_params_T: a memoized Be can be deleted from the ctx using ctx\_\_delete
- - rc*be*,rc_be
- be*: remove aliases: - \_be,b*,\_b
- be\_: use config argument instead of .config:

      - .config

### Patch Changes

- be\__ctx_: no matching ctx for given be: fix: return undefined instead of null
- is*ctx*: fix: nested arrays that do not contain a MapCtx return false

## 4.0.0

### Major Changes

- be**val**T→be**val**new_T
- remove be_prop_pair,be_arg_triple

      - be_prop_pair_
      - be_prop_pair_T
      - be_arg_triple_
      - be_arg_triple_T

- be\_: single argument: val**new: delegate to id**set, expired**def, is_source**def config methods
- - be**params_T,be**opts_T
    be: arguments: - key:string

### Minor Changes

- - be\_\_config_T
- be\_: + ∋ be\_\_config_T:

      + .config

## 3.4.0

### Minor Changes

- - rmemo_val_T
- rmemo helper functions:

  - be*rmemo_pair*
  - be_rmemo_pair_T
  - be*rsig_triple*
  - be_rsig_triple_T
  - val\__be_rmemo_pair_
  - val\_\_be_rmemo_pair_T
  - val\__be_rsig_triple_
  - val\__be_rsig_triple_T
    size-limit:
    rmemo_ signal* be* ctx\_: + 12B

## 3.3.3

### Patch Changes

- rmemo\_: remove extra return:

      rmemo_: - 1B
      rmemo_ signal_ be_ ctx_: - 6B

## 3.3.2

### Patch Changes

- rmemo\_: cur_ref.l: ternery instead of bitwise:

      rmemo_: - 2B
      rmemo_ signal_: - 7B
      rmemo_ signal_ be_ ctx_: - 6B

## 3.3.1

### Patch Changes

- rmemo size-limit: ctx\_ instead of ctx\_\_new

## 3.3.0

### Minor Changes

- rmemo: export all/be\_ & all/ctx:

      + be_
      + globalThis__be_
      + be__is_source__
      + be__set
      + ctx__set
      + be__delete
      + ctx__delete
      + be__has_
      + be__ctx_
      + be__val_
      + source__map_ctx_
      + be__debug
      + ctx__new
      + is_ctx_

## 3.2.2

### Patch Changes

- be\_: + be\_\_debug: extracted error checking: - 67B

## 3.2.1

### Patch Changes

- fix: subscriber_a is lazy:

      rmemo: + 7B
      rmemo signal: + 8B

## 3.2.0

### Minor Changes

- rmemo\_: returns r_rmemo_T<val_T>
- rsig\_: returns rw_rmemo_T<val_T>
- - rw_rmemo_T<val_T>,r_rmemo_T<val_T>
- - read_r_rmemo_o_T

### Patch Changes

- r_rmemo_o_T: - val

## 3.1.0

### Minor Changes

- be\_: shorten error messages

  ctx\__delete: - is_source_ check

  size-limit: - 135B

## 3.0.0

### Major Changes

- rememo→rmemo: a rememo npm package already exists:

      rememo_→rmemo_
      signal_→rsig_
      rememo_T->r_rmemo_T
      rememo_def_T→rmemo_def_T
      rememo_subscriber_T→rmemo_subscriber_T
      rememo_o_T→r_rmemo_o_T

### Patch Changes

- rmemo*,rsig*: size optimization
- rmemo\_: always pass rmemo$ function passed into def function

## 2.4.0

### Minor Changes

- - rememo\_
- - prototype\_\_set
- - signal\_
- - defineProperty
- - getPrototypeOf: aliased by prototype\_
- - defineProperties
- - setPrototypeOf: aliased by prototype\_\_set

### Patch Changes

- noop: js: empty arguments

## 2.3.0

### Minor Changes

- - isPrimitive
- - prototype\_
- - isPromiseLike: aliased by isPromise
- - memo\_

## 2.2.2

### Patch Changes

- package.json: files: + \*.js

## 2.2.1

### Patch Changes

- package.json:

      fix: missing exports
      	+ all
      	+ be
      fix: missing tsconfig.json

## 2.2.0

### Minor Changes

- - ctx-core/be:

    be
    be*
    be**delete
    be**has*
    be**has**ctx*
    be**set
    be**val*
    Ctx
    ctx**delete
    ctx**new
    ctx\_\_set
    MapCtx
    NestedMapCtx

## 2.1.0

### Minor Changes

- fix:types package.json exports
- tsconfig:

      "module": "ESNext"
      "moduleResolution": "nodenext"
      "target": "ESNext"

### Patch Changes

- revive ctx-core macro-package: combine some @ctx-core/\* libries: separate export modules for each:

      @ctx-core/array
      @ctx-core/atob
      @ctx-core/base16
      @ctx-core/btoa
      @ctx-core/buffer
      @ctx-core/chain
      @ctx-core/class
      @ctx-core/color
      @ctx-core/combinators
      @ctx-core/crypto
      @ctx-core/currency
      @ctx-core/data
      @ctx-core/date
      @ctx-core/debounce
      @ctx-core/error
      @ctx-core/fetch
      @ctx-core/fibonacci
      @ctx-core/function
      @ctx-core/functional
      @ctx-core/math
      @ctx-core/matrix
      @ctx-core/number
      @ctx-core/object
      @ctx-core/queue
      @ctx-core/random
      @ctx-core/regex
      @ctx-core/set
      @ctx-core/sleep
      @ctx-core/string
      @ctx-core/time
      @ctx-core/types
      @ctx-core/uri
      @ctx-core/uuid

- package.json: - "svelte": "./src/index.js"
