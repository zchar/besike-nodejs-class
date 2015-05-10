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

  var current_class = _class;
  _class.prototype.super = function() {
    var funcName, args, result;
    current_class = current_class.__super__;

    funcName = arguments[0];
    args = [].slice.call(arguments, 1);

    result =  current_class.prototype[funcName].apply(this, args);
    current_class = _class;

    return result;
  };

  return _class;
};
