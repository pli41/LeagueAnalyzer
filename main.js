requirejs.config({
    nodeRequire: require,
    baseUrl: 'js',
    paths: {
        'app': 'app',
        'jQuery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
        'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min',
        'angular-route': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular-route.min',
        'bootstrap': 'http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jQuery']
        },
    }
});

// Start the main app logic.
requirejs(['app', 'angular', 'jQuery'],
    function(app, angular, $) {
        //var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
            angular.bootstrap(document, ['AntiAddicter']);
        });
    });