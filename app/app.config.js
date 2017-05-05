angular.module("app").config(["$routeProvider", "$locationProvider",
    function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl :   "app/feed/feed.template.html",
            controller  :   "feedController"
        })
        .otherwise("/");
    $locationProvider.html5Mode(true);
}]);





