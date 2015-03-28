AppControllers.controller('UsersCtrl', ['$scope', 'renderElements', 'RequestFactory',
    function ($scope, renderElements, RequestFactory) {

        $scope.userList = [];

        RequestFactory.get('countries',function(data){
            $scope.userList = data;
        });

    }]);
