(function () {
'use strict';

angular.module('Mod1', [])

.controller('Mod1Controller', function ($scope) {
  $scope.lunch = "";
  $scope.contador=0;
  $scope.mensaje = "";

  $scope.displayMensaje = function () {
   if (  $scope.lunch == "") {
     $scope.mensaje=  "Please enter data first";
   }
   else{
     $scope.contador= calculateNumericForString($scope.lunch);

     if ($scope.contador <4 ){
       $scope.mensaje ="Enjoy!";}
     else {
         $scope.mensaje ="Too much!";}
   }


  };

  function calculateNumericForString(string) {
    var arr= string.split(",");
    var totalStringValue =arr.length;
    return totalStringValue;
  }

});


})();
