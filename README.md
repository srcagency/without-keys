# without-keys

  returns a new object without the keys passed as second parameter

## Installation

    // npm
    $ npm install without-keys


## API

  ```javascript
  withoutKeys = require('without-keys')

  var obj = {
    a: "René",
    b: "Nielsen",
    c: "info@domain.com"
  };

  var k = withoutKeys(obj, ['c']) // { a: "René", b: "Nielsen" }
  ```

## License

  MIT
