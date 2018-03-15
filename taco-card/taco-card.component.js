angular.module("tacoApp").component("tacoCard", {
  templateUrl: "taco-card/taco-card.html",
  bindings: {
    restaurants: "<",
  },
  controller: ['RestaurantService', function(RestaurantService) {
  }]
});
