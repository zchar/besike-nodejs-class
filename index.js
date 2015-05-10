module.exports = function(context, superClass) {
  var _initializer = context.initialize ? context.initialize : (function() {});

  if (superClass) {
    var so = new superClass();
    _initializer.prototype = so;
    so.constructor = _initializer;
  }

  for(var key in context) {
    if ('initialize' != key) { _initializer.prototype[key] = context[key]; }
  }

  return _initializer;
};
