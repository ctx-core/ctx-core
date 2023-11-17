# ctx-core

## 3.2.0

### Minor Changes

- rmemo\_: returns read_rmemo_T<val_T>
- rsig\_: returns readwrite_rmemo_T<val_T>
- - readwrite_rmemo_T<val_T>,read_rmemo_T<val_T>
- - read_rmemo_o_T

### Patch Changes

- rmemo_o_T: - val

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
      rememo_T->rmemo_T
      rememo_def_T→rmemo_def_T
      rememo_subscriber_T→rmemo_subscriber_T
      rememo_o_T→rmemo_o_T

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
