angular.module("feed").controller("feedController", [
    "$scope", "$routeParams", "$location", "$http", "feedService", "NgMap", function
        ($scope, $routeParams, $location, $http, feedService, NgMap) {
        $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCFydlnzVs916LcEaSAHV6r9krk3Ty1SNg";
        var clickedPost = null;


        feedService.getPosts().then(function (response) {
            $scope.posts = response.data;
        }).then(function (response) {
            console.log("ERROR " + response.data);
        });


        $scope.showMap = function (id) {
            var elementId = "map-" + id;
            var map = document.getElementById(elementId);
            var geocoder = new google.maps.Geocoder();
            var loc;
            feedService.getLocation(id).then(function (response) {
                geocoder.geocode({'address': response.data}, function (results, status) {
                    if (status == 'OK') {
                        loc = results[0].geometry.location;

                        var lat = parseFloat(loc.lat().toString().substr(0, 12));
                        var lng = parseFloat(loc.lng().toString().substr(0, 12));

                        var myOptions = {
                            zoom: 13,
                            center: {lat: lat, lng: lng},
                            scrollwheel: false,
                            navigationControl: false,
                            mapTypeControl: false,
                            scaleControl: false
                        };
                        map = new google.maps.Map(document.getElementById(elementId), myOptions);
                    }
                })

            })
        };


        $scope.showChilds = function (post) {
            post.active = !post.active;
            clickedPost = post;
            $scope.showMap(post.id);
        };


    }
]);
