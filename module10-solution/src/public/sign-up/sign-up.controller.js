(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController);
  
  SignUpController.$inject = ['MyInfoService'];
  function SignUpController(myInfoService) {
    var $ctrl = this;
    
    $ctrl.submit = function() {
      console.log("Submitting");
      console.log($ctrl.user.firstname);
    }
  }
  
  
  })();
  