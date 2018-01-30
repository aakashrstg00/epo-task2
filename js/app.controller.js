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
