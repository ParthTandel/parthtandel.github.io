angular.module('portfolio')
    .controller('ScrollCtrl', function($scope, $rootScope, anchorSmoothScroll) {
        $scope.activeMenu = 'Home';
        $rootScope.reverse = false;
        $scope.toggle = false;
        $scope.gotoElement = function(eID) {
            anchorSmoothScroll.scrollTo(eID);
            $scope.toggle = false;
            console.log($scope.toggle);
        };
        $scope.gotoElement('home-anchor');
    });
