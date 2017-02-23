angular.module('portfolio')
    .controller('ScrollCtrl', function($scope, $rootScope, anchorSmoothScroll) {
        $scope.activeMenu = 'Home';
        $rootScope.reverse = false;
        $scope.gotoElement = function(eID) {
            anchorSmoothScroll.scrollTo(eID);
            console.log($rootScope.reverse);
        };
        $scope.gotoElement('project-anchor');
    });
