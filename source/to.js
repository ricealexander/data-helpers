const accessProperty = require('./utilities/accessProperty')

function to (...keys) {
  return (object => {
    if (keys.length === 1) {
      return accessProperty(object, keys[0])
    }

    return keys.reduce((result, key) => {
      result[key] = accessProperty(object, key)
      return result
    }, {})
  })
}

module.exports = to
