AppFactories.factory('AuthFactory', ['RequestFactory', '$rootScope', '$location', 'NotificationFactory',
    function (RequestFactory, $rootScope, $location,NotificationFactory) {

        var AuthFactory = {};

        AuthFactory.auth = false;
        AuthFactory.permissions = []; //not used, but they are implemented :)
        AuthFactory.user = {};

        AuthFactory.handleLogin = function (data) {

            console.log(data);
            AuthFactory.user = data;
            RequestFactory.updateToken(data._id);

            AuthFactory.auth = true;
            AuthFactory.permissions = ['user'];

            $rootScope.$broadcast('AuthChanged', {auth: AuthFactory.auth, permissions: AuthFactory.permissions});

            $location.path('/');

        };

        if (RequestFactory.token) {

            AuthFactory.auth = true;
            RequestFactory.get('countries/'+RequestFactory.token, AuthFactory.handleLogin);
        }

        AuthFactory.handleLogout = function () {

            RequestFactory.updateToken('');

            AuthFactory.auth = false;
            AuthFactory.permissions = [];

            $rootScope.$broadcast('AuthChanged', {auth: AuthFactory.auth, permissions: AuthFactory.permissions});

            $location.path('/');

        };

        AuthFactory.hasPermissions = function (needsAuth, permissionsToCheck) {

            if ((needsAuth && !AuthFactory.auth) || (!needsAuth && AuthFactory.auth)) {

                return false;
            }

            if (permissionsToCheck) {

                var valid = false;
                _.each(permissionsToCheck, function (permission) {
                    valid = _.some(AuthFactory.permissions, function (myPermission) {
                        return permission == myPermission;
                    });
                    console.log(permission, valid);
                    return valid;
                });

                return valid;
            }

            return true;
        };

        AuthFactory.logout = function () {

            console.log('logout');
            AuthFactory.user = {};
            AuthFactory.auth = false;
            $rootScope.$broadcast('AuthChanged', {auth: AuthFactory.auth, permissions: AuthFactory.permissions});
        };

        AuthFactory.login = function (data) {

            console.log('login');

            var checkLogin = function(countries) {

                var user = _.find(countries,function(country){

                    return country.name.toLowerCase() === data.name.toLowerCase() && country.password === data.password;
                });

                if (!user) {
                    NotificationFactory.showNotification({type:'error',message:'Login Failed'});
                    return;
                }

                AuthFactory.handleLogin(user);
            };
            RequestFactory.get('countries', checkLogin);
        };

        AuthFactory.register = function (data) {

            console.log('register');

            RequestFactory.post('countries',data, AuthFactory.handleLogin);
        };

        return AuthFactory;

    }]);
