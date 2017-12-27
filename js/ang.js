var app = angular.module("App", []);
app.controller("AppController", function ($scope, AppService) {
    $scope.sp = $scope.ti = $scope.aq = $scope.hrq = $scope.sg = true;
    var promise = AppService.getData();
    promise.then(function (data) {
        $scope.posts = data.data;
    }, function (err) {
        $scope.error = err;
    });
    $scope.clearall = function () {
        $scope.sp = $scope.ti = $scope.aq = $scope.hrq = $scope.sg = false;
    }
    $scope.selectall = function () {
        $scope.sp = $scope.ti = $scope.aq = $scope.hrq = $scope.sg = true;
    }
    $scope.applyFilters = function () {
        $scope.posts
    }
    $scope.org = 'ARW';
    $scope.stream = '';
    $scope.appMode = 'On Campus';
});
app.service("AppService", function ($http, $q) {
    this.getData = function () {
        var pr = $q.defer();
        $http.get('data.json')
            .then(function (data) {
                pr.resolve(data);
            }, function (err) {
                pr.reject(err);
            }).catch(function (err) {
                console.log("ERROR");
            });
        return pr.promise;
    }
});
