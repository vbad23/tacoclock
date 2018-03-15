angular.module("tacoApp").component("tacoCard", {
  templateUrl: "taco-card/taco-card.html",
  bindings: {
    restaurant: "<",
  },
  controller: ['RestaurantService', function(RestaurantService) {
  }]
});
