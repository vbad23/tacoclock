angular.module("tacoApp").component("tacoClock", {
  templateUrl: "taco-clock/taco-clock.html",
  controller: ['TacoClockService', function(TacoClockService) {
    this.tacoRestuarants = [];
    TacoClockService.fetchTacos().then(
      tacoRestuarants => this.tacoRestuarants = tacoRestuarants // check names
    )
  }]
});
