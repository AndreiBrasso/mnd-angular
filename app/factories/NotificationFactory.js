AppFactories.factory('NotificationFactory', ['$http', function ($http) {
    //http://github.hubspot.com/messenger/docs/welcome/
    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
        theme: 'air',
        maxMessages: 3
    };

    var NotificationFactory = {};

    NotificationFactory.showNotification = function (options) {

        //options.id = 'messenger-alert';
        options.hideAfter = 3;

        Messenger().post(options);
    };

    return NotificationFactory;

}]);
