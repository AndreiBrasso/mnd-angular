AppControllers.controller('LoginCtrl', ['$scope', 'renderElements', 'RequestFactory', 'AuthFactory',
function ($scope, renderElements, RequestFactory, AuthFactory) {

    $scope.country = {email: '', password: '', name: ''};

    $scope.actions = {

        login: function () {

            AuthFactory.login($scope.country);
        }

    };

    var elements = [
        {
            el: 'div',
            class: 'col-md-offset-4 col-md-4 jumbotron',
            elements: [
                {
                    el: 'h2',
                    directive: 'text',
                    txt: 'Welcome !',
                    class: 'text-center'
                },
                {
                    el: 'form',
                    role: 'form',
                    name: 'loginForm',
                    'ng-submit': 'actions.login()',
                    elements: [
                        {
                            directive: 'cool-input',
                            model: 'country.name',
                            type: 'text',
                            label: 'Country',
                            placeholder: 'Romania'
                        },
                        {
                            directive: 'cool-input',
                            model: 'country.password',
                            type: 'password',
                            label: 'Password'
                        },
                        {
                            el: 'button',
                            type: 'submit',
                            class: 'btn btn-default',
                            elements: [
                                {
                                    'directive': 'text',
                                    'txt': 'Login'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    $scope.html = renderElements(elements);
}]);
