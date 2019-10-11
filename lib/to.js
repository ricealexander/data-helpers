import { parseKeyTrail, parseMultiArguments } from './utilities'

function to(...args) {
  const keys = parseMultiArguments(args)

  return (object) => {
    if (keys.length === 1) {
      return parseKeyTrail(keys[0], object)
    }

    return keys.reduce((result, key) => {
      result[key] = parseKeyTrail(key, object)
      return result
    }, {})
  }
}

export default to
