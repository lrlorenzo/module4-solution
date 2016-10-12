(function() {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/home/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories/main-categories.template.html',
      controller: 'CategoriesController as categoriesController',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('categories.item', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/items/main-items.template.html',
      controller: "ItemController as itemController",
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          console.log("ShortName:", $stateParams.categoryShortName);
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });

  }

})();
