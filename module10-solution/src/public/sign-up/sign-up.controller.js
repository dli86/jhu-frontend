(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController);
  
  SignUpController.$inject = ['MyInfoService', 'allMenuItems'];
  function SignUpController(myInfoService, allMenuItems) {
    var $ctrl = this;

    $ctrl.submit = function() {
      var categoryShortNames = [];
      var itemShortNames = [];
      var shortNameToDetails = {};
      var shortNameToCategory = {};
      for (var i in allMenuItems) {
        categoryShortNames.push(i);
        for (var j in allMenuItems[i]["menu_items"]) {
          itemShortNames.push(allMenuItems[i]["menu_items"][j]["short_name"]);
          shortNameToDetails[allMenuItems[i]["menu_items"][j]["short_name"]] = allMenuItems[i]["menu_items"][j];
          shortNameToCategory[allMenuItems[i]["menu_items"][j]["short_name"]] = i;
        }
      }

      if (!itemShortNames.includes($ctrl.user.favoriteDish)) {
        $ctrl.showDishDoesNotExistMessage = true;
        return;
      } else {
        $ctrl.showDishDoesNotExistMessage = false;
      }

      myInfoService.firstname = $ctrl.user.firstname;
      myInfoService.lastname = $ctrl.user.lastname;
      myInfoService.email = $ctrl.user.email;
      myInfoService.phone = $ctrl.user.phone;
      myInfoService.favoriteDishDetails = shortNameToDetails[$ctrl.user.favoriteDish];
      myInfoService.favoriteDishCategoryShortName = shortNameToCategory[$ctrl.user.favoriteDish];
      $ctrl.submitted = true;
    }
  }
  
})();
  