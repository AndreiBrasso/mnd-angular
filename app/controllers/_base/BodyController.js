AppControllers.controller("bodyCtrl", ['$scope', 'renderElements', 'NavigationFactory',
function ($scope, renderElements, NavigationFactory) {

    var render = function () {

        if (!NavigationFactory.checkPermissions()) {

            return;
        }

        $scope.htmlBody = NavigationFactory.getBodyHtml();

        var elements = [
            {
                'class': 'col-md-12',
                'custom-view': 'htmlBody'
            }
        ];

        $scope.html = renderElements(elements);

    };

    render();

    $scope.$on('AuthChanged', function(){

        render();
    });

    $scope.$on(
        "$routeChangeSuccess",
        function ($currentRoute, $previousRoute) {

            render();

        }
    );

}]);