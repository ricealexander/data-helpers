import { parseKeyTrail, parseMultiArguments } from './utilities'

function isValidValue(value) {
  if (Array.isArray(value)) return !!value.length
  if (typeof value === 'object') return !!Object.keys(value).length
  return !!value
}

function hasValue(object, key) {
  let shouldBeExcluded = false
  let path = key

  // keys starting with ! should return true
  // if the key is not present
  if (path.startsWith('!')) {
    path = path.slice(1)
    shouldBeExcluded = true
  }

  const value = parseKeyTrail(object, path)
  return shouldBeExcluded ? !isValidValue(value) : isValidValue(value)
}

function has(...args) {
  const keys = parseMultiArguments(args)

  return object => (
    keys.every(key => hasValue(object, key))
  )
}

export default has
