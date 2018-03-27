angular.module("tacoApp").config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/', {
    template: '<taco-list />',
    resolve: {
      restaurants: ["RestaurantService", function(RestaurantService) {
        return RestaurantService.fetchRestaurants();
      }]
    }
  }).when('/taco-restaurant/:id', {
    template: '<taco-restaurant />',
  }).when('/no-tacos', {
    templateUrl: '/no-tacos/no-tacos.html',
  }).when('/404', {
    templateUrl: '/404-page/404-page.html',
  });
}]);
