(function () {
  'use strict';
  
  angular.module('data')
  .service('MenuDataService', MenuDataService);
  
  MenuDataService.$inject = ['$q', '$timeout']
  function MenuDataService($q, $timeout) {
    var service = this;
  
    // List of shopping items
    var items = [];
  
    // Pre-populate a no cookie list
    items.push({
      name: "Lunch",
      quantity: "2 bags",
      description: "Sugar used for baking delicious umm... baked goods."
    });
    items.push({
      name: "Dinner",
      quantity: "1 bags",
      description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
    });
    items.push({
      name: "Specials",
      quantity: "3 bags",
      description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
    });
  
    // Simulates call to server
    // Returns a promise, NOT items array directly
    service.getItems = function () {
      var deferred = $q.defer();
  
      // Wait 2 seconds before returning
      $timeout(function () {
        // deferred.reject(items);
        deferred.resolve(items);
      }, 800);
  
      return deferred.promise;
    };

    service.getAllCategories = function() {
      var deferred = $q.defer();
  
      // Wait 2 seconds before returning
      $timeout(function () {
        // deferred.reject(items);
        deferred.resolve(items);
      }, 800);
  
      return deferred.promise;
    };

    service.getItemsForCategory = function(categoryShortName) {
      var deferred = $q.defer();
      console.log("categoryShortName", categoryShortName);
  
      // Wait 2 seconds before returning
      $timeout(function () {
        // deferred.reject(items);
        deferred.resolve(items);
      }, 800);
  
      return deferred.promise;
    };

  }
  
  })();
  