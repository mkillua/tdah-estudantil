/**
 * Created by viking on 09/07/16.
 */
angular.module('Tdah').controller('AlunosController', function ($scope,$http) {
    $scope.images = [];

    $http({
        method : "GET",
        dataType: 'json',
        url : "//tdah-api/user/user"
    }).then(function mySucces(response) {
        
        console.log(response);
    });



    //  $http.get(api+'user/user')
    //  .success(function(images){
    //        $scope.images = images;
    // console.log(images);
    //   })

});