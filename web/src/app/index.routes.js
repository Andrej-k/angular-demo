(function() {

  'use strict';

  angular
    .module('seed-angular')
    .config(routeConfig);

  function routeConfig($locationProvider, $routeProvider) {

    $routeProvider
      .when('/' , {
        templateUrl: 'app/partials/main/main.html'
      })
        .when('/team/:teamId' , {
      templateUrl:'app/partials/team/team.html'
      }).
      otherwise({
          redirectTo: '/'
      });

      $locationProvider.html5Mode(true);

  }
})();