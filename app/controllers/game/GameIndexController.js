AppControllers.controller('GameIndexCtrl', ['$scope', 'renderElements', 'AuthFactory', 'NotificationFactory', 'RequestFactory',
    function ($scope, renderElements, AuthFactory, NotificationFactory, RequestFactory) {

        $scope.welcomeMessage = 'Hello '+AuthFactory.user.email+'!';


        $scope.listOfTreaties = [{name:'country one'},{name:'country second'},{name:'country ten'},{name:'country nine'}];
        $scope.listOfWars = [{name:'country one'},{name:'country one'},{name:'country six'},{name:'country five'}];

        $scope.listOfIncoming = [{name:'country one'},{name:'country one'},{name:'country six'},{name:'country five'}];
        $scope.listOfOutgoing = [{name:'country one'},{name:'country one'},{name:'country six'},{name:'country five'}];

        $scope.otherCountries = [];
        $scope.selectedCountryId = 0;

        RequestFactory.get('countries',function(data){
            $scope.otherCountries = data;

            renderElements();
        });

        $scope.actions = {


        };

        $scope.$on('AuthChanged', function(){

            $scope.welcomeMessage = 'Hello '+AuthFactory.user.email+'!';
        });

    }]);
