angular.module('Tdah').controller('CourseController', function($scope,$http,$rootScope,$window,$stateParams) {

$scope.variavel = {};
    /**
     * metodo responsavel por buscar categorias de cursos disponiveis
     */
    $scope.courseCategory  = function () {

        $http.get($rootScope.env.apiUrl+'course/category')
            .success(function (responses) {
               $scope.categorys = {};
                $scope.categorys = responses.data;
            })
            .error(function (error) {
                console.log(error);
                $scope.course = error;
            });
    };
    /**
     * Método responsavel por guardar os dados do curso cadastrado
     */
    $scope.registerCourse  = function () {

        $http.post($rootScope.env.apiUrl+'course/course',$scope.course)
            .success(function (responses) {
                $scope.alerts = [
                    { type: 'success', msg: 'Curso Cadastrado com successo!' }
                ];
            })
            .error(function (error) {
                $scope.alerts = [
                    { type: 'danger', msg: 'Erro ao cadastrar o curso' }
                ];
            });

    };

    $scope.getCourse  = function () {

        $http.get($rootScope.env.apiUrl+'course/course')
            .success(function (responses) {
                console.log(responses);
                $scope.courses = responses.data;
            })
            .error(function (error) {
                $scope.courses = error;

            });

    };

    $scope.deleteCourse  = function (id) {

        $http.delete($rootScope.env.apiUrl+'course/course/'+id)
            .success(function (responses) {
                $scope.alerts = [
                    { type: 'info', msg: 'Curso removido com successo!' }
                ];
            })
            .error(function (error) {
                $scope.alerts = [
                    { type: 'danger', msg: 'Erro ao remover o curso' }
                ];

            });

        };

        $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});

