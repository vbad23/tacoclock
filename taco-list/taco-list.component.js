angular.module("tacoApp").component("tacoList", {
  templateUrl: "taco-list/taco-list.html",
  controller: ['RestaurantService', function(RestaurantService) {

    this.finished = false;
    this.searching = true;

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
        id: "restaurant.average_cost_for_two",
        name: "Lowest Price"
      }
    ];

    // Gets Location and Restaurants from Service
    RestaurantService.fetchRestaurants(RestaurantService.latitude, RestaurantService.longitude).then(
      restaurants => {
        this.restaurants = restaurants;
        this.locationName = RestaurantService.locationName;
        this.searching = false;
        this.finished = true;
      }
    );

    // Location Input Submit
    this.submit = function() {
      this.finished = false;
      this.searching = true;
      RestaurantService.fetchCoordinates(this.location).then(
        coordinates => {
          this.coordinates = coordinates;
          if (this.coordinates.status === "ZERO_RESULTS") {
            this.locationName = "No results found. Please try another search.";
            this.searching = false;
            this.finished = true;
          } else {
            RestaurantService.locationName = this.coordinates.results[0].formatted_address;
            RestaurantService.latitude = this.coordinates.results[0].geometry.location.lat;
            RestaurantService.longitude = this.coordinates.results[0].geometry.location.lng;
            RestaurantService.fetchRestaurants().then(
              restaurants => {
                this.restaurants = restaurants;
                this.locationName = RestaurantService.locationName;
                this.searching = false;
                this.finished = true;
              }
            );
          }
        }
      );
    }
  }]
});
