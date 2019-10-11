function parseKeyTrail(string, object) {
  if (!string || typeof string !== 'string'
   || !object || typeof object !== 'object'
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
