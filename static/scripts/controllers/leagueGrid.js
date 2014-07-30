(function(){

angular.module('pkr')
  .controller('LeagueGridController', function ($scope, gamesService) {
      var me = this;

      this.picked = 3;

      this.games = [];
      gamesService.getData(function(dataResponse) {
          me.games = dataResponse.games;
      });

      this.getImage = function(name){
          var file = name.replace(/\s+/g, '').toLowerCase();
          return '/resources/images/' + file + '.jpg';
      };

      this.formatDate = function(str) {
          var y = str.substr(0,4),
              m = str.substr(4,2) - 1,
              d = str.substr(6,2);
          var D = new Date(y,m,d);
          return (D.getFullYear() == y && D.getMonth() == m && D.getDate() == d) ? D : 'invalid date';
      };

      this.selectAction = function(setTab){
          this.picked = setTab;
      };

      this.isSelected = function(checkTab){
          return this.picked == checkTab;
      };
  });
})();
