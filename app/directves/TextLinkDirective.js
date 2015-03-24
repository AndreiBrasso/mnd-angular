
AppDirectives.directive("textLink", function($templateCache) {
  
  var directive = { };
  directive.restrict = 'AE';

  directive.scope = {
    txt: '@',
    link: '@'
  };

  directive.template = $templateCache.get("../app/templates/components/text-link.html");
  
  return directive;
});
