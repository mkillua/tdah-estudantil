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

        $stateProvider.state('curso', {
            parent: 'home',
            url: "/curso",
            views: {
                "home": {
                    controller: 'CourseController',
                    templateUrl: "views/curso/curso.html"
                }
            }});

        $stateProvider.state('aula', {
            parent: 'home',
                url: "/novocurso",
                views: {
                    "home": {
                        controller: 'CourseController',
                        templateUrl: "views/curso/novocurso.html"
                    }
                }});
        $stateProvider.state('aulas', {
            parent: 'home',
            url: "/aulas:courseId",
            views: {
                "home": {
                    controller: 'ClassController',
                    templateUrl: "views/curso/aulas/aulas.html"
                }
            }});

        $stateProvider.state('lesson', {
            parent: 'home',
            url: "/aulas/:courseId/:classId",
            views: {
                "home": {
                    controller: 'ClassController',
                    templateUrl: "views/curso/aulas/aula.html"
                }
            }});

        $stateProvider.state('novaaula', {
            parent: 'home',
            url: "/novaaula:courseId",
            views: {
                "home": {
                    controller: 'ClassController',
                    templateUrl: "views/curso/aulas/novaaula.html"
                }
            }});

        $stateProvider.state('newquestion', {
            parent: 'home',
            url: "/novapergunta/:classId",
            views: {
                "home": {
                    controller: 'ClassController',
                    templateUrl: "views/curso/aulas/perguntas/novapergunta.html"
                }
            }});

        $stateProvider.state('questions', {
            parent: 'home',
            url: "/aula/:classId/perguntas",
            views: {
                "home": {
                    controller: 'ClassController',
                    templateUrl: "views/curso/aulas/perguntas/perguntas.html"
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



