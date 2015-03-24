
AppDirectives.directive("textAction", function($templateCache) {
  
  var directive = { };
  directive.restrict = 'AE';

  directive.scope = {
    txt: '@'
  };

  directive.template = $templateCache.get("../app/templates/components/text-action.html");
  
  return directive;
});
