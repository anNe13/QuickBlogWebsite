/**
 * Created by A on 2017-04-19.
 */
angular.module("feed").factory("feedService", ["$http",  function ($http) {

    return {

        getPosts: function(){
        return $http.get("http://sample-env-1.xbnhfte6dj.us-west-2.elasticbeanstalk.com/api/postfeed/all");

    },
        getLocation: function (id) {
            return $http.get("http://sample-env-1.xbnhfte6dj.us-west-2.elasticbeanstalk.com/api/postfeed/" + id +"/location");
        }

    };
}]);