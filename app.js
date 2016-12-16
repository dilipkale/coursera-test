(function(){
    'use strict';
    
    
    
    angular.module('myFirstApp',[])    
        .controller('MyFirstController', function($scope){
            $scope.name = '';
            $scope.totalNumericValue = 0;
            
            $scope.displayNumericValue = function(){
                var totalNameValue = claculateNumericValue($scope.name);
                $scope.totalNumericValue = totalNameValue;
            };
            
                function claculateNumericValue(str){
                   
                    var total = 0;
                    for(var i =0; i< str.length;i++){
                        total += str.charCodeAt(i);
                    }
                    
                    return total;
                }
        });
})();