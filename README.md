# Data-Helpers
Useful functions for working with array methods, such as `map()`, `reduce()`, `filter()`, and `sort()`


# by
Accepts one or more sorting conditions, expressed as _string_ or _function_. If passed a _string_, the string should represent the property of the object to sort by:

```javascript
cashBackCards.sort(by('rating'))

/* [
{rating: 3.7, name: "Capital One® Quicksilver®...", bank: "Capital One®"}
{rating: 3.7, name: "Discover it® Cash Back", bank: "Discover®"}
{rating: 3.7, name: "Capital One® Savor® Cash ...", bank: "Capital One®"}
{rating: 4.4, name: "Bank of America® Cash Rew...", bank: "Bank of America®"}
] */
```

By default, results are in _ascending_ order. strings can be prefixed with a `'<'` or `'>'` to force the sort to be in _ascending_ or _descending_ order respectively

```javascript
cashBackCards.sort(by('>rating'))

/* [
  {rating: 4.4, name: "Bank of America® Cash Rew...", bank: "Bank of America®"}
  {rating: 3.7, name: "Capital One® Quicksilver®...", bank: "Capital One®"}
  {rating: 3.7, name: "Discover it® Cash Back", bank: "Discover®"}
  {rating: 3.7, name: "Capital One® Savor® Cash ...", bank: "Capital One®"}
] */
```

The value we pass as a string can also contain an object chain
```javascript
cashBackCards.sort(by('<bank.length'))

/* [
  {rating: 3.7, name: "Discover it® Cash Back", bank: "Discover®"}
  {rating: 3.7, name: "Capital One® Quicksilver®...", bank: "Capital One®"}
  {rating: 3.7, name: "Capital One® Savor® Cash ...", bank: "Capital One®"}
  {rating: 4.4, name: "Bank of America® Cash Rew...", bank: "Bank of America®"}
] */
```


We can also create a custom function to sort by. The sorting function should accept two objects, compare them, and return `-1` or `1` if the condition was passed. In this way, any valid sorting function for `Array.prototype.sort()` is valid for `by()`

```javascript
// sort by the number of registered trademark symbols in the name
function registeredCount(cardA, cardB) {
  const a = cardA.name.split('®').length
  const b = cardB.name.split('®').length

  if (a > b) return 1
  if (a < b) return -1
  return 0
}

cashBackCards.sort(by(registeredCount))
/* [
  {rating: 3.7, name: "Discover it® Cash Back", bank: "Discover®"}
  {rating: 4.4, name: "Bank of America® Cash Rew...", bank: "Bank of America®"}
  {rating: 3.7, name: "Capital One® Quicksilver®...", bank: "Capital One®"}
  {rating: 3.7, name: "Capital One® Savor® Cash ...", bank: "Capital One®"}
] */
```

This is useful because we can assign multiple sorting conditions to be executed in order. The following example sorts first by our custom function and second by the card name

```javascript
// sort by the number of registered trademark symbols in the name
function registeredCount(cardA, cardB) {
  const a = cardA.name.split('®').length
  const b = cardB.name.split('®').length

  if (a > b) return 1
  if (a < b) return -1
  return 0
}

cashBackCards.sort(by([registeredCount, 'name']))
/* [
  {rating: 4.4, name: "Bank of America® Cash Rew...", bank: "Bank of America®"}
  {rating: 3.7, name: "Discover it® Cash Back", bank: "Discover®"}
  {rating: 3.7, name: "Capital One® Quicksilver®...", bank: "Capital One®"}
  {rating: 3.7, name: "Capital One® Savor® Cash ...", bank: "Capital One®"}
] */
```

The array syntax for multiple arguments is optional. It's also fine to pass the sorting conditions as multiple arguments:

```javascript
cashBackCards.sort(by('>rating', '<name'))
/* [
  {rating: 4.4, name: "Bank of America® Cash Rew...", bank: "Bank of America®"}
  {rating: 3.7, name: "Capital One® Quicksilver®...", bank: "Capital One®"}
  {rating: 3.7, name: "Capital One® Savor® Cash ...", bank: "Capital One®"}
  {rating: 3.7, name: "Discover it® Cash Back", bank: "Discover®"}
] */
```
