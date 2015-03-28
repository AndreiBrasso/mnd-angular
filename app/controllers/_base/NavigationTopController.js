AppControllers.controller("navigationTopCtrl", ['$scope', '$location', 'renderElements', 'AuthFactory',
    function ($scope, $location, renderElements, AuthFactory) {

        $scope.location = $location.path();

        var render = function () {

            $scope.linksLeft = [
                {link: '/game', text: 'Main', 'display': AuthFactory.hasPermissions(true)},
                {link: '/game/users', text: 'Users', 'display': AuthFactory.hasPermissions(true)}
            ];
            $scope.linksRight = [
                {link: '/logout', text: 'Logout', 'display': AuthFactory.hasPermissions(true)},

                {link: '/login', text: 'Login', 'display': AuthFactory.hasPermissions(false)},
                {link: '/register', text: 'Register', 'display': AuthFactory.hasPermissions(false)}
            ];

            var authElements = [];
            if (AuthFactory.auth) {
                authElements = [
                    {
                        el: 'p',
                        directive: 'text',
                        class: 'navbar-text',
                        txt: 'GDP ' + (AuthFactory.user.gdp || 0)
                    },
                    {
                        el: 'p',
                        directive: 'text',
                        class: 'navbar-text',
                        txt: 'Pop ' + (AuthFactory.user.pop || 0)
                    },
                    {
                        el: 'p',
                        directive: 'text',
                        class: 'navbar-text',
                        txt: 'Mil ' + (AuthFactory.user.pop || 0)
                    }
                ];
            }

            var elements = [
                {
                    'el': 'ul',
                    'directive': 'ul-nav',
                    'class': 'nav navbar-nav',
                    'customelements': 'linksLeft',
                    'location': 'location'
                },
                {
                    'el': 'ul',
                    'class': 'nav navbar-nav nav-bar-left',
                    'elements': authElements
                },
                {
                    'el': 'ul',
                    'directive': 'ul-nav',
                    'class': 'nav navbar-nav navbar-right',
                    'customelements': 'linksRight',
                    'location': 'location'
                }
            ];

            $scope.navigation = renderElements(elements);
        };

        render();

        $scope.$on('AuthChanged', function () {

            render();
        });

        $scope.$on(
            "$routeChangeSuccess",
            function ($currentRoute, $previousRoute) {

                $scope.location = $location.path();

            }
        );

    }]);