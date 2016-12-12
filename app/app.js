'use strict';


angular.module("myApp", ["ngRoute", "dndLists"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'advanced-frame.html',
                controller: 'DragDropController'
            })
            .otherwise({redirectTo: '/test'});
    });