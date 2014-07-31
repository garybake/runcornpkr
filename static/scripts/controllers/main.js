(function(){

angular.module('pkr')
  .controller('MainController', function ($scope, gamesService) {
      var me = this;

      this.picked = 3;

      this.games = [];
      gamesService.getData(function(dataResponse) {
          me.games = dataResponse.games;
      });

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
