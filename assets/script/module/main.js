angular.module('Tdah',['ui.router','ui.bootstrap','angularTrix','ngSanitize','environment'])
    .run(function(envService,$rootScope) {
        envService.set('development');
        $rootScope.env = envService.read('all');
    }).config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthService');
});