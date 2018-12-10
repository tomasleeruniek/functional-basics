const { all } = require("../helpers")

/**
 * Find the first element that matches the filter criteria
 *
 * @param  {Object}    filter  Object containing one or more fields
 * @param  {Object[]}  source  Source input
 *
 * @return  {Object|undefined}
 *
 * @example
 * const comments = [{id: 1, body: ""}, {id: 2, body: "dolor"}]
 *
 * findBy({id: 2})(comments)
 * // => {id: 2, body: "dolor"}
 */
module.exports = filter => xs => {
  for (let i = 0; i < xs.length; i++) {
    if (all(key => filter[key] === xs[i][key], Object.keys(filter))) {
      return xs[i]
    }
  }
}
