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
