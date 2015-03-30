(function () {
'use strict';
    function HeaderController($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    };

    angular
        .module("app", ['ngRoute'])
        .config(function ($routeProvider) 
                {
                    $routeProvider.
                    when('/home', {
                        templateUrl: 'scripts/home/home.html',
                        controller: ('HomeController', HomeController)
                    }).
                    when('/search', {
                        templateUrl: 'scripts/search/search.html',
                        controller: ('SearchController', SearchController)
                    }).
                    when('/selling', {
                        templateUrl: 'scripts/selling/selling.html',
                        controller: ('SellingController', SellingController)
                    }).
                    when('/buying', {
                        templateUrl: 'scripts/buying/buying.html',
                        controller: ('BuyingController', BuyingController)
                    }).
                    when('/featured', {
                        templateUrl: 'scripts/featured/featured.html',
                        controller: ('FeaturedController', FeaturedController)
                    }).
                    when('/about', {
                        templateUrl: 'scripts/about/about.html',
                        controller: ('AboutController', AboutController)
                    }).
                    when('/blog', {
                        templateUrl: 'scripts/blog/blog.html',
                        controller: ('BlogController', BlogController)
                    }).
                    when('/contact', {
                        templateUrl: 'scripts/contact/contact.html',
                        controller: ('ContactController', ContactController)
                    }).
                    otherwise({
                        redirectTo: 'home'
                    });
                    }
               ).controller("HeaderController", HeaderController);

})();