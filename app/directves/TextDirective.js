AppDirectives.directive("text", function($templateCache) {
  
  var directive = { };
  directive.restrict = 'AE';

  directive.scope = {
    txt: '@'
  };

  directive.template = $templateCache.get("../app/templates/components/text.html");
  
  return directive;
});
