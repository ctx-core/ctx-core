# ctx-core

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
