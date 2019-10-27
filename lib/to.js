import { parseKeyTrail, parseMultiArguments } from './utilities'

function to(...args) {
  const keys = parseMultiArguments(args)

  return (object) => {
    if (keys.length === 1) {
      return parseKeyTrail(object, keys[0])
    }

    return keys.reduce((result, key) => {
      result[key] = parseKeyTrail(object, key)
      return result
    }, {})
  }
}

export default to
