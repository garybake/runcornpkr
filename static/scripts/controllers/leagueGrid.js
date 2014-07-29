(function(){

angular.module('pkr')
  .controller('LeagueGridController', function ($scope) {
      var games = [
          {
              gameid: 3,
              date: "20140531",
              players: [
                  {position: 1,"name": "Steve J"},
                  {position: 2,"name": "Darren B"},
                  {position: 3,"name": "Stacey R"},
                  {position: 4,"name": "Darren R"},
                  {position: 5,"name": "Gary B"},
                  {position: 6,"name": "Nathan B"}
              ]
          },
          {
              gameid: 2,
              date: "20140324",
              players: [
                  {position: 1,"name": "Steve J"},
                  {position: 2,"name": "Gary B"},
                  {position: 3,"name": "Darren B"},
                  {position: 4,"name": "Neil P"},
                  {position: 5,"name": "Darren R"},
                  {position: 6,"name": "Frank R"},
                  {position: 7,"name": "Daniel R"},
                  {position: 8,"name": "Nathan B"}
              ]
          },
          {
              gameid: 1,
              date: "20140201",
              players: [
                  {position: 1,"name": "Steve J"},
                  {position: 2,"name": "Darren B"},
                  {position: 3,"name": "Darren R"},
                  {position: 4,"name": "Neil P"},
                  {position: 5,"name": "Gary B"}
              ]
          }
      ];

      this.picked = 3;

      this.games = games;

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
