AppServices.service('renderElements', function () {

    var self = this;

    this.render = function (elements) {

        var theView = "";

        angular.forEach(elements, function (properties) {

            var elem = '';
            var nested = {};
            var el = 'div';

            angular.forEach(properties, function (value, attr) {

                if (attr == 'directive') {

                    elem += value;

                } else if (attr == 'el') {

                    el = value;

                } else if (attr == 'elements') {

                    nested = value;

                } else {

                    elem += ' ' + attr + '="' + value + '"';
                }

            });

            elem += '>';

            if (nested) {

                elem += self.render(nested);
            }

            elem = '<'+el+' '+ elem+'</'+el+ '>';

            theView += elem;
        });

        return theView;
    };

    return this.render;

});