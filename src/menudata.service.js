(function() {
  'use strict';

  angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function() {

      console.log("Searching all categories");

      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      }).then(function (result) {
        console.log("Returning[" + result.data.length + "]");
        return result.data;
      });
    }

    service.getItemsForCategory = function(categoryShortName) {

      console.log("Searching[" +  categoryShortName + "]");

      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
      }).then(function (result) {
        console.log("Returning GetItemsForCategory[" + result.data.menu_items.length + "]");
        return result.data.menu_items;
      });
    }

  }
})();
