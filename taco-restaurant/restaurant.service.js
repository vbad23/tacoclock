angular.module("tacoApp").service("RestaurantService", ["$http", function($http){

  this.fetchRestaurants = function() {
    return $http.get("https://developers.zomato.com/api/v2.1/search?count=20&lat=42.952141211765&lon=-85.640864464171&cuisines=73&sort=real_distance&order=asc",
  {headers: {"user-key": 'c3dbbbcffd5c0a6b2d67803c3dcfa4d3'}})
  .then(
      response => response.data.restaurants
    )
  }
}]);
