angular.module("tacoApp").component("tacoRestaurant", {
  templateUrl: "taco-restaurant/taco-restaurant.html",
  controller: ['RestaurantService', "$routeParams", function(RestaurantService, $routeParams) {

    // Uses the page route to get the restaurant information 
    RestaurantService.fetchRestaurant($routeParams.id).then(
      restaurant => {
        this.restaurant = restaurant;
      }
    );
  }]
});

//
