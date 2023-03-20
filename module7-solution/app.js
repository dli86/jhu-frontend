(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 20 },
    { name: "sprite", quantity: 30 },
    { name: "oranges", quantity: 40 },
    { name: "grapes", quantity: 50 }
  ];
  var itemsBought = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsToBuy.push(item);
  };

  service.removeItem = function (itemIndex) {
    itemsToBuy.splice(itemIndex, 1);
    itemsBought.push(itemsToBuy[itemIndex]);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };

}

})();
  