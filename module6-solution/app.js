(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.message = "";

    function isEmpty(str) {
      return (str.length === 0 || !str.trim());
    }

    $scope.checkIfTooMuch = function() {
      if (!$scope.items) {
        $scope.message = "Please enter data first";
        $scope.color = "red";
        return;
      }

      var items = $scope.items.split(",");
      var count = 0;

      for (var i = 0; i < items.length; i++) {
        if (isEmpty(items[i])) {
          continue;
        }

        count++;
      }

      if (count <= 3) {
        $scope.message = "Enjoy!";
        $scope.color = "green";
      } else {
        $scope.message = "Too much!";
        $scope.color = "green";
      }
    }

  }

})();
