(function(){

angular.module('pkr')
  .controller('PlaceListController', function ($scope, $routeParams) {
    //   console.log($routeParams);
      this.gbp = $routeParams.game;
      console.log(this.gbp);
  });
})();
