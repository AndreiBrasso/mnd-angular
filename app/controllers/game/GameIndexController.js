AppControllers.controller('GameIndexCtrl', ['$scope', 'renderElements', 'AuthFactory', 'NotificationFactory',
    function ($scope, renderElements, AuthFactory, NotificationFactory) {

        $scope.welcomeMessage = 'Hello '+AuthFactory.user.email+'!';

        $scope.actions = {

            testNotification: function () {

                NotificationFactory.showNotification({type: 'info', 'message': 'test notification'});
            }

        };

        var elements = [
            {
                el: 'h1',
                'ng-bind': 'welcomeMessage'
            },
            {
                directive: 'text-action',
                txt: 'test-notification',
                'ng-click': 'actions.testNotification()'
            }
        ];

        $scope.html = renderElements(elements);


        $scope.$on('AuthChanged', function(){

            $scope.welcomeMessage = 'Hello '+AuthFactory.user.email+'!';
        });

    }]);
