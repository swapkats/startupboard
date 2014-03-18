'use strict';

angular.module('startupBoard').controller('IndexController', ['$scope', 'Global', 'Ui', '$document', function ($scope, Global, Ui, $document) {
    $scope.global = Global;
    $scope.ui = Ui;

    $document.on('keydown',function(e){
    	e.stopPropagation();
    	if(e.which == 27){
    		$scope.ui.showLoginOverlay = false;
    		if(!$scope.$$phase)
    			$scope.$digest();
    	}
    });
}]);