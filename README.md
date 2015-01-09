# without-keys

Returns a new object without the keys passed as second parameter, and without modifying the first object

## Installation

```
$ npm install without-keys
```

## API

```javascript
withoutKeys = require('without-keys')

var company = {
    name: 'Blanca Benson',
    phone: '+1 (850) 515-3813',
    address: '661 Congress Street - Wanship - Northern Mariana Islands 717'
};

withoutKeys(company, ['address']) // {  name: 'Blanca Benson',  phone: '+1 (850) 515-3813' }
```

## License

[MIT](http://opensource.org/licenses/MIT) © René Nielsen @ [src.agency](http://src.agency)
