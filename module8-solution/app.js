(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<found',
      // onRemove: '&'
    },
    // controller: FoundItemsDirectiveController,
    // controllerAs: 'foundItemsFromDDO',
    // bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {

}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var controller = this;

  controller.found = [];

  controller.search = function() {
    console.log("Searching");
    console.log(controller.searchTerm);
    MenuSearchService.getMatchedMenuItems(controller.searchTerm).then(function(found) {
      controller.found = Array.from(new Set(found)); // Use a set to remove duplicates
      console.log(controller.found);
      // console.log(controller.found["$$state"]["value"]);
      // console.log(controller.found[0]);
    });
  }

  controller.removeItem = function (itemIndex) {
    console.log("found is: ", controller.found);
    // Splice the item from the found array
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
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

        // return processed items
        console.log("sample item: ", foundItems[0]);
        return foundItems;
      },
      function error(result) {
        console.log("Error", result);
      }
    );
  }
}

})();
