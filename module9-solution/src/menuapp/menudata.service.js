(function () {
  'use strict';
  
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/");
  
  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function() {

      return $http({
        url: (ApiBasePath + "categories.json")
      })
      .then(
        function success(result) {
          return result["data"];
        },
        function error(result) {
          console.log("Error: ", result);
        }
      );

    };

    service.getItemsForCategory = function(categoryShortName) {

      return $http({
        url: (ApiBasePath + "menu_items/" + categoryShortName + ".json")
      })
      .then(
        function success(result) {
          return result["data"]["menu_items"];
        },
        function error(result) {
          console.log("Error: ", result);
        }
      );
    };

  }
  
  })();
  