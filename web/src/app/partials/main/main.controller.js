(function() {

  'use strict';

  angular
    .module('seed-angular')
      .controller('MainController', function($scope, $http) {
        $http.get("http://est-teams.estudent.hr/api/teams").success(function(response) {
          $scope.details = response;
        });
      })

  function MainController($log) {
    var vm = this;
    vm.name = 'Main controller';

    function initController() {
      $log.debug('Main|init');
    }


    initController();
  }

})();
