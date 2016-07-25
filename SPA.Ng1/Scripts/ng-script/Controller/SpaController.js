/*
*    Created By: Shashangka Shekhar;
*    Create Date: 20-6-2016 (dd-mm-yy); 
*    Updated Date: 20-6-2016 (dd-mm-yy);
*/

app.controller('HomeController', ['$scope', function ($scope) {
    $scope.message = "This is Home Page";
}]);

app.controller('ContactController', ['$scope', function ($scope) {
    $scope.message = "This is Contact Page";
}]);

app.controller('CompanyController', ['$scope', function ($scope) {
    $scope.message = "This is Company Page";
}]);