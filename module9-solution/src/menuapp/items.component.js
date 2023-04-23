(function () {
  'use strict';
  
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuapp/templates/items.template.html',
    bindings: {
      items: '<'
    }
  })
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var ctrl = this;
    ctrl.items = items;
  }

})();
  