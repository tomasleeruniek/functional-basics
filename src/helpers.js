/**
 * Accumulate values from left to right
 *
 * @param {Function}  Function taking two parameters: current value of
 * accumulator, and the current value in the list
 * @param {[]}        List of values to fold over
 * @param {*}         Initial value of accumulator, first element of the list
 * is used if not provided.
 *
 * @return {*}        Final value of the accumulator.
 *
 * @example
 * foldl(Math.max, [1,2,3]) = 3
 */
const foldl = (f, xs, acc) => {
  if (!acc) {
    acc = xs[0]
  }

  for (let i = 0; i < xs.length; i++) {
    acc = f(acc, xs[i])
  }

  return acc
}

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
const applyAll = (fs, x, i, xs) => {
  return foldl((acc, val) => val(acc, i, xs), fs, x)
}

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
const all = (f, xs) => {
  return foldl((acc, val) => acc && f(val), xs, true)
}

module.exports = {
  foldl,
  applyAll,
  all,
}
