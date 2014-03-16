'use strict';

//Articles service used for articles REST endpoint
angular.module('startupBoard').factory('Articles', ['$resource', function($resource) {
    return $resource('board/:articleId', { articleId: '@_id' }, { update: { method: 'PUT'}});
}]);