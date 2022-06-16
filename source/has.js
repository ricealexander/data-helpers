const accessProperty = require('./utilities/accessProperty')

function isValidValue (value) {
  if (Array.isArray(value)) return (value.length > 0)
  if (typeof value === 'object') return (Object.keys(value).length > 0)
  return !!value
}

function containsValue (object, property) {
  let shouldBeInversed = false
  let path = property

  // properties starting with ! should return true
  // if the property is not present
  if (path.startsWith('!')) {
    path = path.slice(1)
    shouldBeInversed = true
  }

  const value = accessProperty(object, path)
  const isValid = isValidValue(value)

  if (shouldBeInversed) return !isValid
  return isValid
}

const has = (...properties) => (
  object => (
    properties.every(property => containsValue(object, property))
  )
)

module.exports = has
