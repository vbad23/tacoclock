angular.module("tacoApp").service("RestaurantService", ["$http", function($http){

  this.fetchRestaurants = function() {
    var url = "https://developers.zomato.com/api/v2.1/search?count=20&lat=42.952141211765&lon=-85.640864464171&cuisines=73&sort=real_distance&order=asc"
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

}]);

// rename to Restaurant service
