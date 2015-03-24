AppDirectives.directive("basicInput", function ($templateCache) {

    var directive = {};
    directive.restrict = 'AE';

    var uniqueId = 1;

    directive.scope = {
        model: '=',
        label: '@',
        placeholder: '@',
        type: '@'
    };

    directive.template = $templateCache.get("../app/templates/components/basic-input.html");

    directive.link = function(scope, elem, attrs) {
        scope.uniqueId = 'item' + uniqueId++;
    };

    return directive;
});
