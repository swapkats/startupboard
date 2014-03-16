'use strict';

angular.module('startupBoard').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Post Job',
        'link': 'board/new'
    }];
    
    $scope.isCollapsed = false;
}]);