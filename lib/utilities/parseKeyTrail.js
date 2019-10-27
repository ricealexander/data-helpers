function parseKeyTrail(object, string) {
  if (!object || typeof object !== 'object'
    || !string || typeof string !== 'string'
  ) return undefined

  function followTrail(objectLevel, key) {
    if (objectLevel === undefined || objectLevel[key] === undefined) {
      return undefined
    }
    return objectLevel[key]
  }

  const trail = string.split('.')
  return trail.reduce(followTrail, object)
}

export default parseKeyTrail
