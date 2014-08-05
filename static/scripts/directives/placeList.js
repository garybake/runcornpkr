angular.module('pkr')
    .directive('placeList', function (gamesService) {
        return {
            templateUrl: 'views/placeList.html',
            restrict: 'E',
            controllerAs: 'placeList',
            controller: function($scope){

                var me = this;
                me.currView = 0;

                // me.currView = parseInt($routeParams.game);
                me.positions = [];
                me.games = [];
                gamesService.getData(function(dataResponse) {
                    me.positions = dataResponse.positions;
                    me.games = dataResponse.games;
                    console.log(me.positions);
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

                me.disableLeft = function(){
                    return me.currView <= 0;
                };

                me.clickLeft = function(){
                    var currView = me.currView;
                    currView -= 1;
                    if (currView === -1){currView = me.games.length - 1;}
                    me.currView = currView;
                    console.log(me.currView);
                    me.game = me.games[me.currView];
                    // $location.path('/placeList/' +  currView);
                };

                me.disableRight = function(){
                    return me.currView >= (me.games.length - 1);
                };

                me.clickRight = function(){
                    var currView = me.currView;
                    currView += 1;
                    if (currView === me.games.length){currView = 0;}
                    me.currView = currView;
                    me.game = me.games[me.currView];
                    console.log(me.currView);
                    // $location.path('/placeList/' +  currView);
                };

                me.isLeague = function(game){
                    return me.currView <= 0;
                };

            }
        };
    });
