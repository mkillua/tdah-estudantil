/**
 * Created by viking on 23/11/16.
 */
angular.module('Tdah').factory('AuthService', function ($window, $q) {
    return {
        request: function(config) {
            config.headers = config.headers || {};

            if ($window.localStorage.getItem('token')) {
                config.headers.Authorization = $window.localStorage.getItem('token');
            }

            return config || $q.when(config);
        },
        response: function(response) {

            if (response.status === 401) {
                $window.location.href = '/';
            }
            return response || $q.when(response);
        }
    };
});