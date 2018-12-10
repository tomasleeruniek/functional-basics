const { applyAll } = require("../helpers")

/**
 * Iterate over an input list, calling `fn` for each element, return a new
 * array
 *
 * @param  {Function}  fn      The function
 * @param  {[]}        source  Input Array
 *
 * @return {Array}
 *
 * @example
 * map( x => x * x )( [ 1, 2, 3 ] )
 * // => [ 1, 4, 9 ]
 */
module.exports = (...fs) => xs => {
  const ys = []

  if (Array.isArray(xs)) {
    for (let i = 0; i < xs.length; i++) {
      ys.push(applyAll(fs, xs[i], i, xs))
    }
  } else if (xs) {
    ys.push(applyAll(fs, xs))
  }

  return ys
}
