
angular.module('Tdah').controller('UserController', function($scope,$http) {


        console.log($scope.vars);
        $scope.user = {};


        $scope.register = function () {
            console.log($scope.user);


            $http.post('//tdah-api.dev/user/user', $scope.user)
                .success(function (responses) {
                    console.log(responses);
                })
                .error(function (erro){
                    console.log(erro);
                });
        }
});
