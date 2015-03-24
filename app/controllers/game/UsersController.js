AppControllers.controller('UsersCtrl', ['$scope', 'renderElements', 'RequestFactory',
    function ($scope, renderElements, RequestFactory) {

        $scope.userList = [];

        RequestFactory.get('users',function(data){
            $scope.userList = data;
        });

    }]);
