describe('menuservice', function () {

  var menuservice;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return whether favorite item exists in the menu', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items.json').respond(['A1', 'SR1']);
    menuservice.getAllMenuItemsAlt().then(function(response) {
      expect(response.data).toEqual(['A1', 'SR1']);
    });
    $httpBackend.flush();
  });

});
