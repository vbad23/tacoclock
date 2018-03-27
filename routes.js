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
    template: '<no-tacos />',
  });
}]);
