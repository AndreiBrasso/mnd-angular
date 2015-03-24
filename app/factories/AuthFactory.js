AppFactories.factory('AuthFactory', ['RequestFactory', '$rootScope', '$location', 'NotificationFactory',
    function (RequestFactory, $rootScope, $location,NotificationFactory) {

        var AuthFactory = {};

        AuthFactory.auth = false;
        AuthFactory.permissions = ['perm1', 'none']; //todo: permissions should be taken from user
        AuthFactory.user = {};

        AuthFactory.handleLogin = function (data) {

            //todo: temporarily until login request works
            if (data.length) {
                console.log('failed');
                NotificationFactory.showNotification({type:'error',message:'Login Failed'});
                return false;
            }

            console.log(data);
            AuthFactory.user = data;
            RequestFactory.updateToken(data._id);

            AuthFactory.auth = true;
            AuthFactory.permissions = ['user'];

            $rootScope.$broadcast('AuthChanged', {auth: AuthFactory.auth, permissions: AuthFactory.permissions});

            $location.path('/');

        };

        //todo: fix me , this needs to be after handleLogin otherwise it won't do the stuff
        if (RequestFactory.token) {

            AuthFactory.auth = true;
            RequestFactory.get('users/'+RequestFactory.token, AuthFactory.handleLogin);
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

            RequestFactory.get('users?'+ $.param(data), AuthFactory.handleLogin);
        };

        AuthFactory.register = function (data) {

            console.log('register');

            RequestFactory.post('users',data, AuthFactory.handleLogin);
        };

        return AuthFactory;

    }]);
