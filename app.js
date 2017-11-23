(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.countLunch = function () {
  	if ($scope.lunch == null || $scope.lunch.trim() == "") {
  		$scope.msg = "";
  		$scope.error = "Please enter data first";
  	}
  	else {
  		$scope.error = "";
	    if ($scope.lunch.split(",").length > 3)
		   	$scope.msg = "Too much!";
	    else
	     	$scope.msg = "Enjoy!"; 
 	}
  };
}

})();