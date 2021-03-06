const _foldr = (f, [x, ...xs], acc, i, lst) => {
  let nextAcc = x ? f(acc, x, i, lst) : acc

  return xs.length ? foldr(f, xs, nextAcc, i + 1, lst) : nextAcc
}

/**
 * Accumulate values from right to left
 *
 * @param {Function}  Function taking from two to four parameters:
 *    - current value of accumulator,
 *    - current value in the list,
 *    - index of value in the list,
 *    - the original list
 * @param {[]}        List of values to fold over
 * @param {*}         Initial value of accumulator
 *
 * @return {*}        Final value of the accumulator
 *
 * @example
 * foldr(Math.max, [1,2,3]) = 3
 */
const foldr = (f, xs, acc) => _foldr(f, xs, acc, 0, xs)

/**
 * Apply a function to every element of a list, returning true if any
 * resulting values are true and false otherwise
 *
 * @param {Function}    Function to apply
 * @param {[]}          List of values
 *
 * @return {boolean}
 *
 * @example
 * any(x => x > 3, [1,2,6]) = true
 */
const any = (f, xs) =>
  foldr((acc, val) => (acc || f(val)) && typeof f(val) === "boolean", xs, false)

/**
 * Apply a function to every element of a list, returning true if all
 * resulting values are true and false otherwise
 *
 * @param {Function}    Function to apply
 * @param {[]}          List of values
 *
 * @return {boolean}
 *
 * @example
 * all(x => x > 3, [4,5,6]) = true
 */
const all = (f, xs) =>
  foldr((acc, val) => acc && f(val) && typeof f(val) === "boolean", xs, true)

/**
 * Apply a list of functions to a single value.
 *
 * @param {Function[]}  List of functions to apply
 * @param {*}           Initial value
 * @param {number}      Index of initial value (if it's from a list)
 * @param {[]}          List of initial values (if applicable)
 *
 * @return {*}
 *
 * @example
 * applyAll([x => x + 2, x => x * 2], 1) = 6
 */
const applyAll = (fs, x, i, xs) => foldr((acc, val) => val(acc, i, xs), fs, x)

module.exports = {
  foldr,
  any,
  all,
  applyAll,
}
