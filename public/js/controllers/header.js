'use strict';

angular.module('startupBoard').controller('HeaderController', ['$scope', 'Global', 'Ui', function ($scope, Global, Ui) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Post Job',
        'link': 'board/new'
    }];
    
    $scope.ui = Ui;
    
    $scope.isCollapsed = false;
}]);