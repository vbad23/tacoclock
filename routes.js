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
  }).when('/404', {
    template: '<error-page />',
  });
}]);


// make an html page in the bucket settings in the static websit ehosting, add the html page as the error page and #! doesnt exist.
//
// redirectTo: normal HTML page
