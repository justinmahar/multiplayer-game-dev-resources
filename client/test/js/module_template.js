(function() {
  var ModuleNameGoesHere = (function() {
    var ModuleNameGoesHere = function(options) {
      // module function constructor example ...
    };

    ModuleNameGoesHere.prototype.foo = function foo() {
      // module function example ...
    };

    return ModuleNameGoesHere;
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = ModuleNameGoesHere;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return ModuleNameGoesHere;
      });
    }
    else {
      window.ModuleNameGoesHere = ModuleNameGoesHere;
    }
  }
})();