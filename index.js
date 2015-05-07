module.exports = function(context) {
  if(context.initialize) {
    return context.initialize;
  } else {
    return function() {};
  }
};
