AppDirectives.directive("coolInput", function ($templateCache) {

    var directive = {};
    directive.restrict = 'AE';

    var uniqueId = 1;

    directive.scope = {
        model: '=',
        label: '@',
        placeholder: '@',
        type: '@'
    };

    directive.template = $templateCache.get("../app/templates/components/cool-input.html");

    directive.link = function(scope, elem, attrs) {
        scope.uniqueId = 'item' + uniqueId++;
    };

    return directive;
});
