(function () {
  angular.module("makey")
    .controller("GameController", ["$scope", "$timeout", function ($scope, $timeout) {
      $scope.boxPositionLeft = "20px";
      $scope.boxPositionTop = "20px";

      $scope.keyPressed = function ($event) {
        switch ($event.which) {
          case 37: // left
          case 65: // a
            moveBox(-5, 0);
            break;
          case 38: // up
          case 87: // w
            moveBox(0, -5);
            break;
          case 39: // right
          case 68: // d
            moveBox(5, 0);
            break;
          case 40: // down
          case 83: // s
            moveBox(0, 5);
            break;
        }
      };

      var moveBox = function (dx, dy) {
        console.log("moving");
        var newX = parseInt($scope.boxPositionLeft, 10) + dx;
        var newY = parseInt($scope.boxPositionTop, 10) + dy;
        $scope.boxPositionLeft = "" + newX + "px";
        $scope.boxPositionTop = "" + newY + "px";
      };

      var gameLoop = function () {
        moveBox(1, 0);
        $timeout(gameLoop, 100);
      };

      gameLoop();
  }]);
})();
