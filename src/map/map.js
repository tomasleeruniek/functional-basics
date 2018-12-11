const { foldr, applyAll } = require("../helpers")

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
    foldr(
      (acc, val, i, lst) => {
        acc.push(applyAll(fs, val, i, lst))
        return acc
      },
      xs,
      ys
    )
  } else if (xs) {
    ys.push(applyAll(fs, xs))
  }

  return ys
}
