AppControllers.controller('LogoutCtrl', ['AuthFactory',
    function (AuthFactory) {

        AuthFactory.handleLogout();
    }]);
