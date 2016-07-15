
angular.module('Tdah').controller('UserController', function($scope,$http) {

    $scope.user = {};
    $scope.register = function () {

        $http.post('//tdah-api.dev/user/user', $scope.user)
            .success(function (responses) {
                $scope.alerts = [
                    { type: 'success', msg: 'Cadastro realizado com sucesso.' }
                ];
                console.log(responses);
            })
            .error(function (erro){
                $scope.alerts = [
                    { type: 'danger', msg: 'Ops: erro ao inserir usuario.' }
                ];
            });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});
