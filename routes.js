angular.module("tacoApp").config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/', {
    template: '<taco-list />',
    resolve: {
      restaurants: ["TacoClockService", function(TacoClockService) {
        return TacoClockService.fetchRestaurants();
      }]
    },
  });

  $routeProvider.when('/restaurant', {
    template: '<taco-restaurant />',
  });

}]);
