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
      var items = $scope.items.split(",");
      var count = 0;

      if (!$scope.items) {
        $scope.message = "Please enter data first";
        return;
      }

      for (var i = 0; i < items.length; i++) {
        if (isEmpty(items[i])) {
          continue;
        }

        count++;
      }

      if (count <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }

  }

})();
