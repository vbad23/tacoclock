angular.module("tacoApp").component("tacoList", {
  templateUrl: "taco-list/taco-list.html",
  controller: ['RestaurantService', function(RestaurantService) {
    this.restaurants = [];
    this.submit = function() {
      this.hold = this.zip;
      this.zip = "";
      RestaurantService.fetchCoordinates(this.hold).then(
        coordinates => {
          this.coordinates = coordinates;
          RestaurantService.latitude = this.coordinates.results[0].geometry.location.lat;
          RestaurantService.longitude = this.coordinates.results[0].geometry.location.lng;
          RestaurantService.fetchRestaurants().then(
            restaurants => this.restaurants = restaurants
          )
        }
      )
    }

    // Default
    RestaurantService.fetchRestaurants(RestaurantService.latitude, RestaurantService.longitude).then(
      restaurants => this.restaurants = restaurants
    )
  }]
});
