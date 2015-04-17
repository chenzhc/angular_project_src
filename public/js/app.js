/**
 * Created by zc on 2015/4/17.
 */
define(['angular'], function(angular) {
    angular.module('myApp', [])
        .controller('MyController', ['$scope', function ($scope) {
            $scope.name = 'Change the name';
        }]);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['myApp']);
    });
});