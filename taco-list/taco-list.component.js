angular.module("tacoApp").component("tacoList", {
  templateUrl: "taco-list/taco-list.html",
  controller: ['RestaurantService', function(RestaurantService) {
    this.restaurants = [];
    RestaurantService.fetchRestaurants().then(
      restaurants => this.restaurants = restaurants
    )
  }]
});
