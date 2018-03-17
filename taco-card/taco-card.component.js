angular.module("tacoApp").component("tacoCard", {
  templateUrl: "taco-card/taco-card.html",
  bindings: {
    restaurant: "<",
  },
  controller: ['RestaurantService', function(RestaurantService) {

    this.ratingPercentage = function() {
      return this.restaurant.restaurant.user_rating.aggregate_rating / 5 * 100;
    }
  }]
});
