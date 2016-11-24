angular.module('Tdah').controller('ClassController', function($scope,$http,$rootScope,$window,$stateParams) {

    $scope.variavel = {};
    /**
     * metodo responsavel por buscar categorias de cursos disponiveis
     */

    /**
     * Método responsavel por guardar os dados do curso cadastrado
     */
    $scope.registerClass  = function () {

        $scope.class.courseId = $stateParams.courseId;
        $http.post($rootScope.env.apiUrl+'class/class',$scope.class)
            .success(function (responses) {
                $scope.alerts = [
                    { type: 'success', msg: 'Aula Cadastrada com successo!' }
                ];
            })
            .error(function (error) {
                $scope.alerts = [
                    { type: 'danger', msg: 'Erro ao cadastrar o aula' }
                ];
            });

    };

    $scope.getClass  = function () {

        $http.get($rootScope.env.apiUrl+'class/class')
            .success(function (responses) {
                $scope.classes = responses.data;
            })
            .error(function (error) {
                $scope.classes = error;

            });

    };

    $scope.getClassById  = function () {

    console.log($stateParams.classId);
        console.log($stateParams.courseId)
        $http.get($rootScope.env.apiUrl+'class/lesson/'+$stateParams.classId+'/'+$stateParams.courseId)
            .success(function (responses) {
                console.log(responses);
                $scope.class = responses.data[0];
            })
            .error(function (error) {
                console.log("deu ruim");
                $scope.class = error;

            });


    };

    $scope.registerQuestion  = function () {

        $scope.question.classId = $stateParams.classId;
        $http.post($rootScope.env.apiUrl+'question/question',$scope.question)
            .success(function (responses) {

                $scope.alerts = [
                    { type: 'success', msg: 'Pergunta Cadastrada com successo!' }
                ];
            })
            .error(function (error) {
                $scope.alerts = [
                    { type: 'danger', msg: error }
                ];
            });


    };

    $scope.getAllQuestions  = function () {

        $http.get($rootScope.env.apiUrl+'question/question/'+$stateParams.classId)
            .success(function (responses) {
                console.log(responses);
              $scope.questions = responses.data;
            })
            .error(function (error) {
                $scope.alerts = [
                    { type: 'danger', msg: error }
                ];
            });


    };

    $scope.getQuestionById  = function () {
        $http.get($rootScope.env.apiUrl+'question/especific',{
            params:{
            'questionId':$stateParams
            .questionId}})
            .success(function (responses) {
                console.log(responses);
                $scope.question = responses.data;
            })
            .error(function (error) {
                $scope.alerts = [
                    { type: 'danger', msg: error }
                ];
            });


    };
    
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };


});

