module.exports = function(context, superClass) {
  var _class = context.initialize ? context.initialize : (function() {});

  if (superClass) {
    var so = new superClass();
    _class.prototype = so;
    so.constructor = _class;
  }

  _class.__super__ = superClass ? superClass : Object;

  for(var key in context) {
    if ('initialize' != key) { _class.prototype[key] = context[key]; }
  }

  _class.prototype.super = function() {
    var funcName = arguments[0];
    var args = [].slice.call(arguments,1);
    return _class.__super__.prototype[funcName].apply(this, args);
  };

  return _class;
};
