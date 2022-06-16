// accessProperty()
// used to access a property of an object that may be deeply nested
// if the property does not exist, returns undefined

/* Example:

   const user = {
     profile: {
       firstName: "Helen"
     }
   }

   accessProperty(user, "profile.firstName")   // "Helen"
*/

const accessProperty = (object, propertyPath) => {
  if (!object || typeof object !== 'object') {
    throw new TypeError(`Expected an Object. Instead got ${typeof object}.`)
  }

  if (typeof propertyPath !== 'string') {
    throw new TypeError(`Expected property path to be a string. Instead got ${typeof propertyPath}.`)
  }

  return propertyPath
    .split('.')
    .reduce(
      (result, step) => result && result[step],
      object
    )
}

export default accessProperty
