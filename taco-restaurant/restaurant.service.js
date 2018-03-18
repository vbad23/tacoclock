angular.module("tacoApp").service("RestaurantService", ["$http", function($http){

  // Grand Rapids city center. Shows this by default.
  this.latitude = 42.952141211765;
  this.longitude = -85.640864464171;

  this.fetchRestaurants = function() {
    var url = "https://developers.zomato.com/api/v2.1/search?count=20&lat=" + this.latitude + "&lon=" + this.longitude + "&cuisines=73&sort=real_distance&order=asc";
    return $http.get(url,
  {headers: {"user-key": 'c3dbbbcffd5c0a6b2d67803c3dcfa4d3'}})
  .then(
      response => response.data.restaurants
    )
  }

  this.fetchRestaurant = function(id) {
    var url = "https://developers.zomato.com/api/v2.1/restaurant?res_id=" + id;
    return $http.get(url,
  {headers: {"user-key": 'c3dbbbcffd5c0a6b2d67803c3dcfa4d3'}})
  .then(
      response => response.data
    )
  }

  this.fetchCoordinates = function(location) {
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyAhXiwRThIxLfgU117A3Z-4g-zKdILrHEc";
    return $http.get(url)
  .then(
      response => response.data
    )
  }

}]);
