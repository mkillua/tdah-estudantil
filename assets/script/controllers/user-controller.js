
angular.module('Tdah').controller('UserController', function($scope,$http,$rootScope,$window,envService) {


    $scope.user = {};
    
    /**
     * metodo responsavel por verificar se email está disponivel
     */
    $scope.validaEmail  = function () {

            $http.get($rootScope.env.apiUrl+'user/email/' + $scope.user.email)
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

       $http.post($rootScope.env.apiUrl+'user/register', $scope.user)
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
        var apiUrl = envService.read('apiUrl');
        $http.get($rootScope.env.apiUrl+'user/login/'+$scope.user.email+'/'+$scope.user.password)
            .success(function (response) {
                $window.localStorage.setItem('token',response.data.token);
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
