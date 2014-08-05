(function(){

angular.module('pkr')
  .service('gamesService', function gamesService($http) {


    // AngularJS will instantiate a singleton by calling "new" on this function

    // this.getData = function() {
    //     return $http({
    //         method: 'GET',
    //         url: '/data/programmes.json',
    //     });
    // };

    this.getData = function(callbackFunc) {
        $http({
            method: 'GET',
            url: '/data/games.json',
         }).success(function(data){
            callbackFunc(data);
        }).error(function(){
            alert('error');
        });
     };
});

})();
