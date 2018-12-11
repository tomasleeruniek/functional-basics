const { applyAll } = require("../helpers")

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity, the remaining functions must be unary.
 *
 * @param   {Array}  fn      Array of functions, call each one in order with
 *                           the input of previous one's result
 * @param   {Array}  source  Input Array
 *
 * @return  {mixed}
 *
 * @example
 * const inc = source = source + 1
 * pipe( inc, inc )( 2 )
 * // => 4
 */
module.exports = (...fs) => (...xs) => {
  const f = fs.shift()

  const y = f(...xs)

  return applyAll(fs, y)
}
