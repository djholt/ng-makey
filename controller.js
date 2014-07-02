(function () {
  angular.module("makey")
    .controller("GameController", ["$scope", "$timeout", function ($scope, $timeout) {
      $scope.birdPositionLeft = 100;
      $scope.birdPositionTop = 400;

      $scope.boxes = [];
      for (var i = 0; i < 100; i++) {
        var r = Math.floor((Math.random() - 0.5) * 200);

        var box1 = {};
        box1.x = 200 + i * 150;
        box1.y = -650 + r;
        $scope.boxes.push(box1);

        var box2 = {};
        box2.x = 200 + i * 150;
        box2.y = 500 + r;
        $scope.boxes.push(box2);
      }

      var moveBoxes = function () {
        angular.forEach($scope.boxes, function (box) {
          box.x -= 2;
        });
      };

      var moveBird = function (dx, dy) {
        $scope.birdPositionLeft += dx;
        $scope.birdPositionTop += dy;
      };

      var gameLoop = function () {
        moveBird(0, 3);
        moveBoxes();
        $timeout(gameLoop, 20);
      };

      gameLoop();

      $scope.keyPressed = function ($event) {
        switch ($event.which) {
          case 32: // space
          case 38: // up
          case 87: // w
            moveBird(0, -40);
            break;
        }
      };
  }]);
})();
