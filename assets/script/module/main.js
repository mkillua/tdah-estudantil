angular.module('Tdah',['ui.router','ui.bootstrap','angularTrix','ngSanitize'])
    .run(function($rootScope) {
        $rootScope.user = '';
    });