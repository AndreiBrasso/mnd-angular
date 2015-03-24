AppControllers.controller('LoginCtrl', ['$scope', 'renderElements', 'RequestFactory', 'AuthFactory',
function ($scope, renderElements, RequestFactory, AuthFactory) {

    $scope.user = {email: '', password: '', remember: false};

    $scope.actions = {

        login: function () {

            AuthFactory.login($scope.user);
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
                            directive: 'basic-input',
                            model: 'user.email',
                            type: 'text',
                            label: 'Email',
                            placeholder: 'youremail@here.com'
                        },
                        {
                            directive: 'basic-input',
                            model: 'user.password',
                            type: 'password',
                            label: 'Password'
                        },
                        {
                            directive: 'checkbox',
                            model: 'user.remember',
                            label: 'Remember me'
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
