angular.module("KSPLaunchCalculator", [])

    .controller("MainCtrl", function($scope){
        $scope.weight = false;

        $scope.thrust = false;

        $scope.planetGravity = [
            {
                name: "Kerbin",
                gravity: 9.81
            },
            {
                name: "Mun",
                gravity: 1.63
            },
            {
                name: "Minmus",
                gravity: 0.491
            },
            {
                name: "Duna",
                gravity: 2.94
            },
            {
                name: "Ike",
                gravity: 1.10
            },
            {
                name: "Dres",
                gravity: 1.13
            },
            {
                name: "Eve",
                gravity: 16.7
            },
            {
                name: "Gilly",
                gravity: 0.049
            },
            {
                name: "Tylo",
                gravity: 7.85
            },
            {
                name: "Vall",
                gravity: 2.31
            },
            {
                name: "Laythe",
                gravity: 7.85
            },
            {
                name: "Eeloo",
                gravity: 1.69
            },
            {
                name: "Moho",
                gravity: 2.70
            }
        ]
        $scope.gravityVal = 0;

        $scope.calculate = function (){

            if($scope.thrust && $scope.weight == false){
                alert('enter the thrust and weight.')
            }
            var twr = ($scope.thrust / ($scope.weight * $scope.gravityVal));
            var accel = (twr - 1) * $scope.gravityVal;

            if(twr < 1){
                alert("Your ship isn't going anywhere.");
                return false;

            }

            $scope.accel = accel;
            alert("Acceleration: "+ accel);
            return twr;


        }

    });
