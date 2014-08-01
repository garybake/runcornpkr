(function(){

angular.module('pkr')
  .controller('PlaceListController', function ($scope, $routeParams, $location, gamesService) {
    var me = this;

    me.currView = parseInt($routeParams.game);
    me.game = [];
    me.games = [];
    gamesService.getData(function(dataResponse) {
        me.games = dataResponse.games;
        me.game = me.games[me.currView];
    });

    me.getImage = function(name){
        var file = name.replace(/\s+/g, '').toLowerCase();
        return '/resources/images/' + file + '.jpg';
    };

    me.formatDate = function(str) {
        var D = new Date();
        if (str){
            var y = str.substr(0,4),
                m = str.substr(4,2) - 1,
                d = str.substr(6,2);
            D = new Date(y,m,d);
        }
        return D;
    };

    me.clickLeft = function(){
        var currView = me.currView;
        currView -= 1;
        console.log(currView);
        if (currView === -1){currView = me.games.length - 1}
        $location.path('/placeList/' +  currView);
    };

    me.clickRight = function(){
        var currView = me.currView;
        currView += 1;
        if (currView === me.games.length){currView = 0}
        $location.path('/placeList/' +  currView);
    };

    me.isLeague = function(game){
        console.log(game);
        if (game.isLeague){
            console.log('isLeague');
            return false;
        } else {
            console.log('notLeague');
            return false;
        }
    }

  });
})();
