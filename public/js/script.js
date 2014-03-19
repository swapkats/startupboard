'use strict';

angular.module('startupBoard', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router']);;'use strict';

//Setting up route
angular.module('startupBoard').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('all articles', {
        url: '/boards',
        templateUrl: 'views/boards/list.html'
    })
      .state('create article', {
        url: '/job/new',
        templateUrl: 'views/boards/create.html'
    })
      .state('edit article', {
        url: '/job/:articleId/edit',
        templateUrl: 'views/boards/edit.html'
    })
      .state('article by id', {
        url: '/job/:articleId',
        templateUrl: 'views/boards/view.html'
    })
      .state('home', {
        url: '/',
        templateUrl: 'views/index.html'
    });
}
]);

//Setting HTML5 Location Mode
angular.module('startupBoard').config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');
}
]);
;'use strict';;'use strict';;'use strict';

angular.module('startupBoard').controller('BoardController', ['$scope', '$stateParams', '$location', 'Global', 'Articles', function ($scope, $stateParams, $location, Global, Articles) {
    $scope.global = Global;

    $scope.create = function() {
        var article = new Articles({
            title: this.title,
            content: this.content,
            location: this.location,
            startup: this.startup,
            website: this.website,
            description: this.description,
            applyInstructions: this.applyInstructions,
            tags: this.tags
        });
        article.$save(function(response) {
            $location.path('articles/' + response._id);
        });

        this.title = '';
        this.content = '';
        this.city = '';
    };

    $scope.remove = function(article) {
        if (article) {
            article.$remove();

            for (var i in $scope.articles) {
                if ($scope.articles[i] === article) {
                    $scope.articles.splice(i, 1);
                }
            }
        }
        else {
            $scope.article.$remove();
            $location.path('articles');
        }
    };

    $scope.update = function() {
        var article = $scope.article;
        if (!article.updated) {
            article.updated = [];
        }
        article.updated.push(new Date().getTime());

        article.$update(function() {
            $location.path('articles/' + article._id);
        });
    };

    $scope.find = function() {
        Articles.query(function(articles) {
            $scope.articles = articles.boards;
        });
    };

    $scope.findOne = function() {
        Articles.get({
            articleId: $stateParams.articleId
        }, function(article) {
            $scope.article = article;
        });
    };
}]);;'use strict';

angular.module('startupBoard').controller('HeaderController', ['$scope', 'Global', 'Ui', function ($scope, Global, Ui) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Post Job',
        'link': 'board/new'
    }];
    
    $scope.ui = Ui;
    
    $scope.isCollapsed = false;
}]);;'use strict';

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
}]);;'use strict';

//Articles service used for articles REST endpoint
angular.module('startupBoard').factory('Articles', ['$resource', function($resource) {
    return $resource('board/:articleId', { articleId: '@_id' }, { update: { method: 'PUT'}, query: {isArray:false}});
}]);;'use strict';

//Global service for global variables
angular.module('startupBoard').factory('Global', [
    function() {
        var _this = this;
        _this._data = {
            user: window.user,
            authenticated: !! window.user
        };

        return _this._data;
    }
]);
;'use strict';

angular.module('startupBoard').service('Ui', [
    function() {
        var exports = {};
        //exports.showLoginOverlay = true;
        //exports.showPostOverlay = true;
        return exports;
    }
]);
;'use strict';

angular.element(document).ready(function() {
    //Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') window.location.hash = '#!';

    //Then init the app
    angular.bootstrap(document, ['startupBoard']);
});