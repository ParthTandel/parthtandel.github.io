// angular.module('portfolio')
app.service('anchorSmoothScroll', function($rootScope) {
        this.scrollTo = function(eID) {
            var startY = currentYPosition();
            var stopY = elmYPosition(eID);
            var distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY);
                return;
            }
            var speed = Math.round(distance / 100);
            if (speed >= 2) speed = 2;
            var step = Math.round(distance / 300);
            var leapY = stopY > startY ? startY + step : startY - step;
            var timer = 0;
            var i = 0;
            if (stopY > startY) {
              $rootScope.reverse = false;
                for (i = startY; i < stopY; i += step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY += step;
                    if (leapY > stopY) leapY = stopY;
                    timer++;
                }
            } else {
              $rootScope.reverse = true;
                for (i = startY; i > stopY; i -= step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY -= step;
                    if (leapY < stopY) leapY = stopY;
                    timer++;
                }
            }

            function currentYPosition() {
                if (self.pageYOffset) return self.pageYOffset;
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                if (document.body.scrollTop) return document.body.scrollTop;
                return 0;
            }

            function elmYPosition(eID) {
                var elm = document.getElementById(eID);
                var y = elm.offsetTop;
                var node = elm;
                while (node.offsetParent && node.offsetParent != document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                }
                return y;
            }

        };

    });
