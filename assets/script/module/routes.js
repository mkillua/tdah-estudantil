/**
 * Created by viking on 09/07/16.
 */
angular.module('Tdah')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider,  $locationProvider) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('login', {
                url: "/login",
                views: {
                    "main": {
                        controller: 'UserController',
                        templateUrl: "views/auth/login.html",
                    }
                }});

        $stateProvider.state('register', {
                url: "/register",
            views: {
                "main": {
                    controller: 'UserController',
                    templateUrl: "views/auth/register.html",
                }
            }});

        $stateProvider
            .state('home', {
                url: "/home",
                views: {
                    "main": {
                        controller: 'HomeController',
                        templateUrl: "views/home.html",
                    }
                }});
        $stateProvider.state('aula', {
            parent: 'home',
                url: "/aula",
                views: {
                    "home": {
                        controller: 'HomeController',
                        templateUrl: "views/auth/aulas/aula.html"
                    }
                }});



        $locationProvider.html5Mode(true);


       /* $routeProvider.when('/', {
            templateUrl: 'index.html',
            controller:'UserController',
        });

        $routeProvider.when('/register', {
            templateUrl: '/views/auth/register.html',
            controller:'UserController',
        });
        $routeProvider.when('/home', {
            templateUrl: '/views/home.html',
            controller:'HomeController',
        });

        $locationProvider.html5Mode(true);
*/
    });



