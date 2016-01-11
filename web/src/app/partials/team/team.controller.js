(function() {

  'use strict';

  angular
    .module('seed-angular')
      .controller('TeamDetailController', function($scope, $http, $routeParams) {
        var url = "http://est-teams.estudent.hr/api/teams/" + $routeParams.teamId + "/members";
        $http.get(url).success(function(response) {
            $scope.details = response;
        });

        $scope.SendData = function () {
            var data = {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                teamId: $routeParams.teamId
            };

            $http.post("http://est-teams.estudent.hr/api/members", data)
                .success(function (data, status, headers, config) {
                    $scope.PostDataResponse = data;
                })
        };
    });


  function MainController($log) {
    var vm = this;
    vm.name = 'Main controller';

    function initController() {
      $log.debug('Main|init');
    }


    initController();
  }

})();
