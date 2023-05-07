(function () {
  "use strict";
  
  angular.module('common')
  .service('MyInfoService', MyInfoService);

  function MyInfoService() {
    var service = this;
  
    service.getMyInfo = function() {
      return {
        "firstname": service.firstname,
        "lastname": service.lastname,
        "email": service.email,
        "favoriteDish": service.favoriteDish
      }
    }
  }
  
  
  
  })();
  