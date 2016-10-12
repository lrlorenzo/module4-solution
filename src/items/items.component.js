(function() {
  'use strict';

  angular.module('MenuApp')
    .component('itemList', {
      templateUrl: 'src/items/items.template.html',
      bindings: {
        items: '<'
      }
    });

})();
