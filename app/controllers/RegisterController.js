AppControllers.controller('RegisterCtrl', ['$scope', 'renderElements', 'AuthFactory',
    function ($scope, renderElements, AuthFactory) {

        $scope.user = {email: '', password: ''};

        $scope.actions = {

            register: function () {

                AuthFactory.register($scope.user);

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
                        txt: 'Registration',
                        class: 'text-center'
                    },
                    {
                        el: 'form',
                        role: 'form',
                        name: 'loginForm',
                        'ng-submit': 'actions.register()',
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
                                el: 'button',
                                type: 'submit',
                                class: 'btn btn-default',
                                elements: [
                                    {
                                        'directive': 'text',
                                        'txt': 'Register'
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
