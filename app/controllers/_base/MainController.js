AppControllers.controller("mainCtrl", ['$scope','renderElements',
function ($scope, renderElements) {

    var elements = [
        {
            'ng-controller': 'navigationTopCtrl',
            'custom-view': 'NavigationTopView'
        },
        {
            'class': 'container-fluid',
            'elements': [
                {
                    'class': 'row',
                    'elements': [
                        {
                            'ng-controller': 'bodyCtrl',
                            'custom-view': 'BodyView'
                        }
                    ]

                }
            ]
        }
    ];

    $scope.MainView = renderElements(elements);

}]);