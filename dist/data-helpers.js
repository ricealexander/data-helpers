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
*/ const $610a78bbf9a9c90f$var$accessProperty = (object, propertyPath)=>{
    if (!object || typeof object !== "object") throw new TypeError(`Expected an Object. Instead got ${typeof object}.`);
    if (typeof propertyPath !== "string") throw new TypeError(`Expected property path to be a string. Instead got ${typeof propertyPath}.`);
    return propertyPath.split(".").reduce((result, step)=>result && result[step], object);
};
var $610a78bbf9a9c90f$export$2e2bcd8739ae039 = $610a78bbf9a9c90f$var$accessProperty;


function $a84e958533f72f27$var$isValidValue(value) {
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "object") return Object.keys(value).length > 0;
    return !!value;
}
function $a84e958533f72f27$var$containsValue(object, property) {
    let shouldBeInversed = false;
    let path = property;
    // properties starting with ! should return true
    // if the property is not present
    if (path.startsWith("!")) {
        path = path.slice(1);
        shouldBeInversed = true;
    }
    const value = (0, $610a78bbf9a9c90f$export$2e2bcd8739ae039)(object, path);
    const isValid = $a84e958533f72f27$var$isValidValue(value);
    if (shouldBeInversed) return !isValid;
    return isValid;
}
const $a84e958533f72f27$var$has = (...properties)=>(object)=>properties.every((property)=>$a84e958533f72f27$var$containsValue(object, property));
var $a84e958533f72f27$export$2e2bcd8739ae039 = $a84e958533f72f27$var$has;



// simpleSort()
// accepts objects and a key
// sorts ascending by default, but key can start
// with '>' or '<' to specifically assign an order
const $53a644bedb329011$var$simpleSort = (objectA, objectB, property)=>{
    let method = "ascending";
    let path = property;
    if (path.startsWith(">")) {
        method = "descending";
        path = path.slice(1);
    }
    if (path.startsWith("<")) {
        method = "ascending";
        path = path.slice(1);
    }
    const a = (0, $610a78bbf9a9c90f$export$2e2bcd8739ae039)(objectA, path);
    const b = (0, $610a78bbf9a9c90f$export$2e2bcd8739ae039)(objectB, path);
    if (method === "ascending") {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    if (method === "descending") {
        if (a < b) return 1;
        if (a > b) return -1;
    }
    return 0;
};
// sort()
// accepts a series of strings or custom sorting functions
// sorts on all conditions passed in order
// for example <array>.sort(sort('contribution', 'name', 'age'))
// would sort array first by contribution, then by name, then by age
const $53a644bedb329011$var$by = (...properties)=>(objectA, objectB)=>{
        for (const property of properties){
            let sortResult = 0;
            if (typeof property === "string") sortResult = $53a644bedb329011$var$simpleSort(objectA, objectB, property);
            if (typeof property === "function") sortResult = property(objectA, objectB);
            if (sortResult === 1 || sortResult === -1) return sortResult;
        }
        return 0;
    };
var $53a644bedb329011$export$2e2bcd8739ae039 = $53a644bedb329011$var$by;



function $296bfbde4c2e0dd0$var$to(...keys) {
    return (object)=>{
        if (keys.length === 1) return (0, $610a78bbf9a9c90f$export$2e2bcd8739ae039)(object, keys[0]);
        return keys.reduce((result, key)=>{
            result[key] = (0, $610a78bbf9a9c90f$export$2e2bcd8739ae039)(object, key);
            return result;
        }, {});
    };
}
var $296bfbde4c2e0dd0$export$2e2bcd8739ae039 = $296bfbde4c2e0dd0$var$to;




console.log({
    has: $a84e958533f72f27$export$2e2bcd8739ae039,
    by: $53a644bedb329011$export$2e2bcd8739ae039,
    to: $296bfbde4c2e0dd0$export$2e2bcd8739ae039
});


//# sourceMappingURL=data-helpers.js.map
