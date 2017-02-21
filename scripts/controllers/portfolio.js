angular.module('portfolio')
    .controller('ScrollCtrl', function($scope, anchorSmoothScroll) {
        $scope.activeMenu = 'Home';

        $scope.gotoElement = function(eID) {
            anchorSmoothScroll.scrollTo(eID);
        };
        $scope.gotoElement('home-anchor');
    });
