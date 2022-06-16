import accessProperty from './utilities/accessProperty'

// simpleSort()
// accepts objects and a key
// sorts ascending by default, but key can start
// with '>' or '<' to specifically assign an order

const simpleSort = (objectA, objectB, property) => {
  let method = 'ascending'
  let path = property

  if (path.startsWith('>')) {
    method = 'descending'
    path = path.slice(1)
  }
  if (path.startsWith('<')) {
    method = 'ascending'
    path = path.slice(1)
  }

  const a = accessProperty(objectA, path)
  const b = accessProperty(objectB, path)

  if (method === 'ascending') {
    if (a > b) return 1
    if (a < b) return -1
  }
  if (method === 'descending') {
    if (a < b) return 1
    if (a > b) return -1
  }
  return 0
}

// sort()
// accepts a series of strings or custom sorting functions
// sorts on all conditions passed in order

// for example <array>.sort(sort('contribution', 'name', 'age'))
// would sort array first by contribution, then by name, then by age

const by = (...properties) => (
  (objectA, objectB) => {
    for (const property of properties) {
      let sortResult = 0

      if (typeof property === 'string') {
        sortResult = simpleSort(objectA, objectB, property)
      }
      if (typeof property === 'function') {
        sortResult = property(objectA, objectB)
      }

      if (sortResult === 1 || sortResult === -1) {
        return sortResult
      }
    }
    return 0
  }
)

export default by
