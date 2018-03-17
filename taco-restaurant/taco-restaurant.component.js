angular.module("tacoApp").component("tacoRestaurant", {
  templateUrl: "taco-restaurant/taco-restaurant.html",
  controller: ['RestaurantService', "$routeParams", function(RestaurantService, $routeParams) {
    console.log($routeParams);
    // this.priceSymbol = "";

    RestaurantService.fetchRestaurant($routeParams.id).then(
      restaurant => {
        this.restaurant = restaurant;
      }
    );
  }]
});

//
