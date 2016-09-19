angular.module('Tdah').controller('CourseController', function($scope,$http,$rootScope,$window,$stateParams) {

$scope.variavel = {};
    console.log($stateParams.courseId);
    /**
     * metodo responsavel por buscar categorias de cursos disponiveis
     */
    $scope.courseCategory  = function () {

        $http.get('//tdah-api.dev/course/category')
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

        $http.post('//tdah-api.dev/course/course',$scope.course)
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

        $http.get('//tdah-api.dev/course/course')
            .success(function (responses) {
                console.log(responses);
                $scope.courses = responses.data;
            })
            .error(function (error) {
                $scope.courses = error;

            });

    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});

