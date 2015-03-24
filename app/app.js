var App = angular.module('App', [
    'App.filters',
    'App.services',
    'App.directives',
    'App.controllers',
    'App.routes',
    'App.factories'
]);

var AppControllers = angular.module("App.controllers", ['templates-dist']);

var AppDirectives = angular.module("App.directives", ['templates-dist']);

angular.module("App.filters", []);

var AppServices = angular.module("App.services", []);

var AppFactories = angular.module("App.factories", []);

// just WOW
App.config(['$provide', function ($provide) {
    $provide.decorator('$controller', ['$delegate', '$templateCache',
        function ($delegate, $templateCache) {

            return function AbstractController(constructor, locals, later, indent) {
                if (typeof constructor == "string") {

                    console.log('init ', constructor);
                    var viewName = constructor.substring(0, constructor.length - 4) + 'View';
                    viewName = viewName.charAt(0).toUpperCase() + viewName.slice(1);

                    var defaultTemplatePath = '../app/templates/views/';

                    var defaultView = $templateCache.get(defaultTemplatePath + viewName+'.html');

                    if (!defaultView) {

                        defaultView = '<div custom-view="html"></div>';
                    }

                    locals.$scope[viewName] =  defaultView;

                }
                return $delegate(constructor, locals, later, indent);
            };
        }]);
}]);