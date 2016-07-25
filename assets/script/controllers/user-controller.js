
angular.module('Tdah').controller('UserController', function($scope,$http,$rootScope,$window) {


    $scope.user = {};


    /**
     * metodo responsavel por verificar se email está disponivel
     */
    $scope.validaEmail  = function () {

            $http.get('//tdah-api.dev/user/email/' + $scope.user.email)
                .success(function (responses) {
                    $scope.validEmail = true;
                })
                .error(function (response) {
                    $scope.validEmail = false;
                    
                });

    };


    /**
     * metodo responsavel por inserir novo usuario
     */
    $scope.register = function () {

       $http.post('//tdah-api.dev/user/register', $scope.user)
            .success(function (responses) {
                $scope.user = {};
                $scope.validEmail = '';
                $scope.alerts = [
                    { type: 'success', msg: 'Cadastro realizado com sucesso.' }
                ];
            })
            .error(function (erro){
                $scope.alerts = [
                    { type: 'danger', msg: 'Ops: erro ao inserir usuario.' }
                ];
            });
    };


    /**
     * Método responsavel por buscar os usuarios
     */
    $scope.login = function()
    {
        console.log($scope.user);
        $http.get('//tdah-api.dev/user/login/'+$scope.user.email+'/'+$scope.user.password)
            .success(function (response) {
                $scope.user = response;
                $window.location.href = '/home';
            })
            .error(function (erro){
                $scope.alerts = [
                    { type: 'danger', msg: 'Ops: Usuario e senha incorretos.' }
                ];
            });
    }

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});
