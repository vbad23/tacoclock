angular.module("tacoApp").component("tacoRestaurant", {
  templateUrl: "taco-restaurant/taco-restaurant.html",
  controller: ['RestaurantService', "$routeParams", function(RestaurantService, $routeParams) {
    this.loading = true;
    this.loaded = false;
    this.mapImage = document.querySelector("img");

    // Uses the page route to get the restaurant information
    RestaurantService.fetchRestaurant($routeParams.id).then(
      restaurant => {
        this.restaurant = restaurant;

        this.ratingPercentage = function() {
          return this.restaurant.user_rating.aggregate_rating / 5 * 100;
        }

        this.address = this.restaurant.location.address.split(",");
        if (this.address.length > 2) {
          this.address.push(" ");
          for (var i = 1; i < this.address.length - 1; i++) {
            if (this.address[i + 1] !== " ") {
              this.address[1] = this.address[1] + ", " + this.address[i + 1];
            }
          }
        }
        if (this.mapImage.complete) {
          this.loading = false;
          this.loaded = true;
        }
      }
    );
  }]
});

//
