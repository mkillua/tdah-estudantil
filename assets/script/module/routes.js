/**
 * Created by viking on 09/07/16.
 */
angular.module('Tdah')
    .config(function($routeProvider,  $locationProvider) {



        $routeProvider.when('/', {
            templateUrl: '/views/auth/login.html',
            controller:'UserController',
        })

       .when('/register', {
            templateUrl: '/views/auth/register.html',
            controller:'UserController',
        });


        $locationProvider.html5Mode(true);

    });