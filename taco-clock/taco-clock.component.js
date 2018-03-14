angular.module("tacoApp").component("tacoClock", {
  templateUrl: "taco-clock/taco-clock.html",
  controller: ['TacoClockService', function(TacoClockService) {
    this.tacoRestaurants = [];
    TacoClockService.fetchRestaurants().then(
      tacoRestaurants => this.tacoRestaurants = tacoRestaurants
    )
  }]
});
