const { any } = require("../helpers")

/**
 * Check if value is in array
 *
 * @param   {mixed}    value   What to search for
 * @param   {Array}    source  Haystack
 *
 * @return  {boolean}  True if has, false otherwise
 *w
 * @tag Array
 * @signature (value: Function|mixed)(source: Array): boolean
 *
 * @example
 * has(2)([ 1, 2 ])
 * // => true
 * has(3)([ 1, 2 ])
 * // => false
 * has(elm => elm.id === 1)([{}, {id: 1}])
 * // => true
 */
module.exports = x => xs => {
  if (typeof x === "function") {
    return any(x, xs)
  } else {
    for (let i = 0; i < xs.length; i++) {
      if (x === xs[i]) {
        return true
      }
    }
  }

  return false
}
