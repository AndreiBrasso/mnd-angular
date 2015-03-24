AppFactories.factory('NavigationFactory', ['$route', '$location', 'AuthFactory', 'renderElements',
function ($route, $location, AuthFactory, renderElements) {

    var NavigationFactory = {};

    NavigationFactory.checkPermissions = function () {

        //todo: check why first route does not have action
        if (!$route.current || !$route.current.action) {

            if (!AuthFactory.auth) {
                $location.path('/login');
            } else {
                $location.path('/game');
            }

            return false;
        }

        if (!AuthFactory.hasPermissions($route.current.needsAuth, $route.current.permissions)) {

            $location.path('/login');
            return false;

        }

        return true;
    };


    NavigationFactory.getBodyHtml = function () {

        var routeAction = $route.current.action;
        var htmlBody = [];

        if (routeAction) {

            htmlBody = renderElements([
                {
                    'ng-controller': routeAction + 'Ctrl',
                    'custom-view': routeAction + 'View'
                }
            ]);
        }

        return htmlBody;
    };

    return NavigationFactory;

}]);
