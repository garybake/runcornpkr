(function(){

angular.module('pkr')
  .controller('LeagueGridController', function ($scope, gamesService) {
      var me = this;

      me.picked = 3;

      me.games = [];
      gamesService.getData(function(dataResponse) {
          me.games = dataResponse.games;
      });

      me.getImage = function(name){
          var file = name.replace(/\s+/g, '').toLowerCase();
          return '/resources/images/' + file + '.jpg';
      };

      me.formatDate = function(str) {
          var y = str.substr(0,4),
              m = str.substr(4,2) - 1,
              d = str.substr(6,2);
          var D = new Date(y,m,d);
          return (D.getFullYear() == y && D.getMonth() == m && D.getDate() == d) ? D : 'invalid date';
      };

      me.selectAction = function(setTab){
          this.picked = setTab;
      };

      me.isSelected = function(checkTab){
          return this.picked == checkTab;
      };
  });
})();
