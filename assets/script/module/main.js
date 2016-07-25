angular.module('Tdah',['ui.router','ui.bootstrap'])
    .run(function($rootScope) {
        $rootScope.user = '';
    });