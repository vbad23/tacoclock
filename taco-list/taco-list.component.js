angular.module("tacoApp").component("tacoList", {
  templateUrl: "taco-list/taco-list.html",
  controller: ['RestaurantService', function(RestaurantService) {

    this.restaurants = [];
    document.getElementById("locationInput").focus();

    // Sort selector
    this.sortChoice = "";
    this.sortOptions = [
      {
        id: "",
        name: "Nearest Location"
      },
      {
        id: "-restaurant.user_rating.aggregate_rating",
        name: "Highest Rating"
      },
      {
        id: "restaurant.price_range",
        name: "Lowest Price"
      }
    ];

    // Gets Location and Restaurants from Service
    RestaurantService.fetchRestaurants(RestaurantService.latitude, RestaurantService.longitude).then(
      restaurants => {
        this.restaurants = restaurants;
        this.locationName = RestaurantService.locationName;
      }
    );

    // Location Input Submit
    this.submit = function() {
      RestaurantService.fetchCoordinates(this.location).then(
        coordinates => {
          this.coordinates = coordinates;
          RestaurantService.locationName = this.coordinates.results[0].formatted_address;
          RestaurantService.latitude = this.coordinates.results[0].geometry.location.lat;
          RestaurantService.longitude = this.coordinates.results[0].geometry.location.lng;
          RestaurantService.fetchRestaurants().then(
            restaurants => {
              this.restaurants = restaurants;
              this.locationName = RestaurantService.locationName;
            }
          );
        }
      );
    }
  }]
});
