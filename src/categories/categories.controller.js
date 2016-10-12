(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  var controller = this;
  console.log("CategoriesController");
  controller.items = items;
}

})();
