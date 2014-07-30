(function(){

    function config($routeProvider){
        $routeProvider
      .when('/placeList/:game', {
        templateUrl: './views/placeList.html',
        controller: 'PlaceListController',
        controllerAs: 'placeList'
      })
      .otherwise({
        redirectTo: '/placeList/'
      });
    }

    angular
        .module('pkr', [
            'ngRoute'
        ])
        .config(config);

})();
