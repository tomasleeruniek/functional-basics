const test = require("tape")
const pipe = require("./pipe")

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
test("core::pipe", t => {
  const inc = input => input + 1
  const sum = (a, b) => a + b

  t.deepEqual(
    pipe(
      inc,
      inc
    )(2),
    4,
    "first input arity 1"
  )

  t.deepEqual(
    pipe(
      sum,
      inc
    )(2, 2),
    5,
    "first input arity 2"
  )

  t.end()
})
