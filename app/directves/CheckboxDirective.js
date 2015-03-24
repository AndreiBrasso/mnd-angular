AppDirectives.directive("checkbox", function ($templateCache) {

    var directive = {};
    directive.restrict = 'AE';

    directive.scope = {
        model: '=',
        label: '@'
    };

    directive.template = $templateCache.get("../app/templates/components/checkbox.html");

    return directive;
});
