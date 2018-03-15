angular.module("tacoApp").config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/', {
    template: '<taco-list />',
    resolve: {
      restaurants: ["RestaurantService", function(RestaurantService) {
        return RestaurantService.fetchRestaurants();
      }]
    },
  });

  $routeProvider.when('/restaurant', {
    template: '<taco-restaurant />',
  });

}]);
