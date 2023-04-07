(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.found = [];

  ctrl.search = function() {
    if (ctrl.searchTerm) {
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(found) {
        ctrl.found = Array.from(new Set(found)); // Use a set to remove duplicates
      });
    }
  }

  ctrl.removeItem = function(itemIndex) {
    console.log("removing item: ", itemIndex);
    this.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      url: (ApiBasePath + "menu_items.json")
    })
    .then(
      function success(result) {
        // process result and only keep items that match
        var foundItems = [];

        for (var i in result["data"]) {
          for (var j in result["data"][i]["menu_items"]) {
            for (var k in result["data"][i]["menu_items"][j]) {
              var description = result["data"][i]["menu_items"][j]["description"];
              if (description.toLowerCase().includes(searchTerm.toLowerCase())) {
                foundItems.push(result["data"][i]["menu_items"][j]);
              }
            }
          }
        }

        return foundItems;
      },
      function error(result) {
        console.log("Error: ", result);
      }
    );
  }
}

})();
