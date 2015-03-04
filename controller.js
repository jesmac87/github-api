var app = angular.module('github-api');

app.controller('GithubController', function($scope, githubService) {


    $scope.getUserData = function() {

        githubService.getUser($scope.searchText).then(function(response) {
            $scope.user = response;
            $scope.searchText = '';
            console.log($scope.user);
        });
    };
});
