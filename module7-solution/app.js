(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('addDollarSigns', AddDollarSignsFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuy.removeItem = function(itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', 'addDollarSignsFilter'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();

  alreadyBought.calculateTotalPrice = function (item) {
    return item.quantity * item.pricePerItem;
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
    { name: "cookies", quantity: 10, pricePerItem: 1 },
    { name: "chips", quantity: 20, pricePerItem: 2 },
    { name: "sprite", quantity: 30, pricePerItem: 3 },
    { name: "oranges", quantity: 40, pricePerItem: 4 },
    { name: "grapes", quantity: 50, pricePerItem: 5 }
  ];
  var itemsAlreadyBought = [];

  service.removeItem = function (itemIndex) {
    var currentItem = itemsToBuy[itemIndex];
    itemsToBuy.splice(itemIndex, 1);
    itemsAlreadyBought.push(currentItem);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsAlreadyBought = function () {
    return itemsAlreadyBought;
  };
}

function AddDollarSignsFilter() {
  return function(input) {
    return "$$$" + input;
  }
}

})();
