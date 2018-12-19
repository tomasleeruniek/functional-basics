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
module.exports = (...fs) => x =>
  foldr(
    (acc, ...rest) => [...acc, applyAll(fs, ...rest)],
    Array.isArray(x) ? x : [x],
    []
  )
