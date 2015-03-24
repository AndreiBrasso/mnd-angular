
AppDirectives.directive("ulNav", function($templateCache) {
  
  var directive = { };
  directive.restrict = 'AE';
  
  directive.scope = {
    models: '=customelements',
    location: '='
  };

  directive.template = $templateCache.get("../app/templates/components/ul-nav.html");
  
  return directive;
});
