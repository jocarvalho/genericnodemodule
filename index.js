/**
 * genericnodeModule
 * https://github.com/jocarvalho/genericnodemodule.git
 *
 */

/**
 * Foo function
 *
 * @param  {String} value
 * @return {String}
 */
module.exports = {
  foo: function(value) {
    if (!value) {
      return 'foo';
    }
    return value.concat('foo');
  },

  /**
   * hello concat hello.
   *
   * @param  {String} value
   * @return {String}
   */
  hello: function(value) {
    if (!value) {
      return 'hello';
    }
    return value.concat('hello');
  }
};
