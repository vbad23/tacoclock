angular.module("tacoApp").service("TacoClockService", ["$http", function($http){


  this.fetchRestaurants = function() {
    return $http.get("https://developers.zomato.com/api/v2.1/search?entity_id=817&entity_type=city&cuisines=73&sort=rating&order=desc").then(
      response => response.data
    )
  }
}]);
