(function () {
  "use strict";
  
  angular.module('common')
  .service('MyInfoService', MyInfoService);
  
  
  function MyInfoService() {
    var service = this;
    var myInfo = {};
  
    service.getMyInfo = function () {
      return {
        "Name": "Bob"
      }
    };
  
  
    service.setMyInfo = function (myInfo) {
      self.myInfo = myInfo;
    };
  
  }
  
  
  
  })();
  