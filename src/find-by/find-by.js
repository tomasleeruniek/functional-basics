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
module.exports = () => () => {}
