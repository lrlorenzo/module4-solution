(function() {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemController', ItemController);

  ItemController.$inject = ['MenuDataService', 'items']
  function ItemController(MenuDataService, items) {
    var controller = this;
    console.log("Item Controller");
    console.log(items);
    controller.items = items;
  }
})();
