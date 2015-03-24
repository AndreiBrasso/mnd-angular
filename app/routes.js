angular.module("App.routes", ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider

            .when('/login', {
                action: "Login"
            })

            .when('/register', {
                action: "Register"
            })

            .when('/logout', {
                action: "Logout",
                needsAuth: true
            })

            .when('/game', {
                action: "GameIndex",
                needsAuth: true
            })

            .when('/game/users', {
                action: "Users",
                needsAuth: true
                //permissions: ['none','perm1']
            })

            .otherwise(
            {
                redirectTo: "/"
            }
        );

        $locationProvider.html5Mode(false);
    }]);