AppDirectives.directive("basicSelect", function ($templateCache) {

    var directive = {};
    directive.restrict = 'AE';

    var uniqueId = 1;

    directive.scope = {    };

    directive.template = $templateCache.get("../app/templates/components/basic-select.html");

    directive.link = function(scope, elem, attrs) {
        scope.uniqueId = 'item' + uniqueId++;
    };

    return directive;
});
