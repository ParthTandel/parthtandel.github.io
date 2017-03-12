// angular.module('portfolio')
app.controller('ScrollCtrl', function($scope, $rootScope, anchorSmoothScroll) {
        $scope.activeMenu = 'Home';
        $rootScope.reverse = false;
        $scope.toggle = false;
        $scope.gotoElement = function(eID) {
            console.log($scope.toggle);
            anchorSmoothScroll.scrollTo(eID);
            $scope.toggle = false;
        };
        $scope.gotoElement('home-anchor');
    });
