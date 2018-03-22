angular.module("tacoApp").component("tacoRestaurant", {
  templateUrl: "taco-restaurant/taco-restaurant.html",
  controller: ['RestaurantService', "$routeParams", function(RestaurantService, $routeParams) {
    this.stringer = "Yo, what's going on? I dunno, you, are?";
    // Uses the page route to get the restaurant information
    RestaurantService.fetchRestaurant($routeParams.id).then(
      restaurant => {
        this.restaurant = restaurant;
        this.address = this.restaurant.location.address.split(",");
        if (this.address.length > 2) {
          this.address.push(" ");
          for (var i = 1; i < this.address.length - 1; i++) {
            if (this.address[i + 1] !== " ") {
              this.address[1] = this.address[1] + ", " + this.address[i + 1];
            }
          }
        }
      }
    );
  }]
});

//
