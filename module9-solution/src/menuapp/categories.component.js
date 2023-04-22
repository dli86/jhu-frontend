(function () {
  'use strict';
  
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/menuapp/templates/categories.template.html',
    bindings: {
      categories: '<'
    }
  });
  
  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories) {
    var ctrl = this;
    ctrl.categories = categories;
  }

  })();
  