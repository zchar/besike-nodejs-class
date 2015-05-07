module.exports = function(context) {
  var _initializer = context.initialize ? context.initialize : (function() {});

  for(var key in context) {
    if ('initialize' != key) { _initializer.prototype[key] = context[key]; }
  }

  return _initializer;
};
