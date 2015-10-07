AppControllers.controller('RegisterCtrl', ['$scope', 'renderElements', 'AuthFactory',
    function ($scope, renderElements, AuthFactory) {

        $scope.country = {email: '', password: '', name: '',
            gdp : 11869168.69046208,
            pop : 97036.74176796677,
            mil : 14641.00000000001
        };

        $scope.actions = {

            register: function () {

                AuthFactory.register($scope.country);

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
                                model: 'country.name',
                                type: 'text',
                                label: 'Country',
                                placeholder: ''
                            },
                            {
                                directive: 'basic-input',
                                model: 'country.email',
                                type: 'text',
                                label: 'Email',
                                placeholder: 'youremail@here.com'
                            },
                            {
                                directive: 'basic-input',
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
