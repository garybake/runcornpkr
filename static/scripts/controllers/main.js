(function(){
    var app = angular.module('pkr', []);

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


    app.controller('grdController', function($scope){

        this.picked = 3;

        this.games = games;

        this.getImage = function(name){
            switch(name) {
                case 'Gary B':
                    return '/resources/images/garyb.jpg';
                case 'Darren B':
                    return '/resources/images/darrenb.jpg';
                case 'Darren R':
                    return '/resources/images/darrenr.jpg';
                case 'Stacey R':
                    return '/resources/images/staceyr.jpg';
                case 'Nathan B':
                    return '/resources/images/nathanb.jpg';
                case 'Steve J':
                    return '/resources/images/stevej.jpg';
                case 'Neil P':
                    return '/resources/images/neilp.jpg';
                case 'Daniel R':
                    return '/resources/images/danielr.jpg';
                case 'Frank R':
                    return '/resources/images/frankr.jpg';
                default:
                    return '/resources/images/basic.jpg';
            }
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
