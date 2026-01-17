# is-real-boolean
Check if a value is a boolean primitive.
```javascript
const isRealBoolean = require('is-real-boolean')
const assert = require('node:assert')
assert(isRealBoolean(true))
assert(!isRealBoolean("foobar"))
assert(!isRealBoolean(new Boolean(true)))
```

## altenratives
you can use [@is-(unknown)/is-boolean](https://npmjs.com/@is-(unknown)/is-boolean) instead if you want