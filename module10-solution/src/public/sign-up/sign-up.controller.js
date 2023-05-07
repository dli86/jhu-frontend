(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController);
  
  SignUpController.$inject = ['MyInfoService'];
  function SignUpController(myInfoService) {
    var $ctrl = this;

    $ctrl.submit = function() {
      myInfoService.firstname = $ctrl.user.firstname;
      myInfoService.lastname = $ctrl.user.lastname;
      myInfoService.email = $ctrl.user.email;
      myInfoService.favoriteDish = $ctrl.user.favoriteDish;
    }
  }
  
})();
  