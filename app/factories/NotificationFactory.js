AppFactories.factory('NotificationFactory', ['$http', function ($http) {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-top',
        theme: 'future'
    };

    var NotificationFactory = {};

    NotificationFactory.showNotification = function (options) {

        options.showCloseButton = true;
        options.id = 'messenger-alert';
        options.hideAfter = 3;

        // http://github.hubspot.com/messenger/docs/welcome/
        console.log(options);
        Messenger().post(options);
    };

    return NotificationFactory;

}]);
