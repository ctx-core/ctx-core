# ctx-core

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
