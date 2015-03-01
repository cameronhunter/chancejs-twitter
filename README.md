# chancejs-twitter
[ChanceJS](http://chancejs.com) mixins for Twitter structures. All mixins are namespaced under `twtr` so as not to conflict with ChanceJS's `twitter` generator for screennames.

## Supported generators

### Screenname
```javascript
chance.twtr.screenname({ length: 10 });
=> '@winifredd'

chance.twtr.screenname({ name: "Cameron Hunter", length: 9 });
=> '@cameronh'
```

### Hashtag
```javascript
chance.twtr.hashtag({ length: 10 });
=> '#gonenbefo'
```

### Cashtag
```javascript
chance.twtr.cashtag({ length: 10 });
=> '$wunruktek'
```

### Short Links (t.co)
```javascript
chance.twtr.tco({ length: 20 });
=> 'https://t.co/LwuJcBN'
```

### API Entities

#### Mention
```javascript
chance.twtr.entity.mention({ start: 0, end: 9 })
=> { screen_name: '@dollieco', name: 'Dollie Colon', id: 4943272568946688, id_str: '4943272568946688', indices: [ 0, 9 ] }

chance.twtr.entity.mention({ name: 'Cameron Hunter', start: 0, end: 9 })
=> { screen_name: '@cameronh', name: 'Cameron Hunter', id: 5429209780453376, id_str: '5429209780453376', indices: [ 0, 9 ] }
```

#### Hashtag
```javascript
chance.twtr.entity.hashtag({ start: 6, end: 23 })
=> { text: '#ownepircuvoflako', indices: [ 6, 23 ] }
```

#### Cashtag
```javascript
chance.twtr.entity.cashtag({ start: 3, end: 15 })
=> { text: '$ecetaezfuvn', indices: [ 3, 15 ] }
```

#### URL
```javascript
chance.twtr.entity.url({ start: 0, end: 15 })
=> { url: 'https://t.co/97', expanded_url: 'https://ekolihcug.edu', display_url: 'ekolihcug.edu', indices: [ 0, 15 ] }
```
