angular.module('tdah').controller('AlunosController', function ($scope,$http) {
    $scope.images = [];

    $http.get('tdah-api/fotos')
        .success(function(images){
            $scope.images = images;

        })

});