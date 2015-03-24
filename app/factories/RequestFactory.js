AppFactories.factory('RequestFactory', ['NotificationFactory', '$http', '$q', function (NotificationFactory, $http, $q) {

    var RequestFactory = {};

    RequestFactory.apiUrl = 'http://localhost:81/';

    RequestFactory.token = localStorage.getItem('token');

    RequestFactory.updateToken = function(token) {

        localStorage.setItem('token', token);
        if (token) {
            $http.defaults.headers.common.Authorization = RequestFactory.token = token;


        }
    };

    RequestFactory.updateToken(RequestFactory.token);

    var success = function (data, status, headers, config, callback) {

        NotificationFactory.showNotification({type: 'success', message: 'ok'});

        if (callback) {

            callback(data);
        }

        return data;
    };

    var error = function (data, status, headers, config) {

        var errorMsg = 'no error specified';

        if(data && data.error) {

            errorMsg = data.error;
        }

        NotificationFactory.showNotification({type: 'error', message: 'failed: '+ errorMsg});

        return data;
    };

    RequestFactory.get = function (entity, callback) {

        NotificationFactory.showNotification({type: 'info', message: 'requesting data'});

        $http.get(RequestFactory.apiUrl + entity).success(function(data, status, headers, config){

            success(data, status, headers, config, callback);
        }).error(error);
    };

    RequestFactory.post = function (entity, data, callback) {

        NotificationFactory.showNotification({type: 'info', message: 'requesting data'});

        $http.post(RequestFactory.apiUrl + entity , data).success(function(data, status, headers, config){

            success(data, status, headers, config, callback);
        }).error(error);
    };

    RequestFactory.put = function (entity, data, callback) {

        NotificationFactory.showNotification({type: 'info', message: 'requesting data'});

        $http.put(RequestFactory.apiUrl + entity, data).success(function(data, status, headers, config){

            success(data, status, headers, config, callback);
        }).error(error);
    };

    return RequestFactory;

}]);
