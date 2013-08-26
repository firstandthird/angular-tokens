angular.module('example-app', ['tokens']);

var MainController = function($scope) {
  $scope.suggestions = [
    'Acura', 'Audi', 'BMW', 'Cadillac',
    'Chrysler', 'Dodge', 'Ferrari', 'Ford',
    'GMC', 'Honda', 'Hyundai', 'Infiniti',
    'Jeep', 'Kia', 'Lexus', 'Mini',
    'Nissan', 'Porsche', 'Subaru', 'Toyota',
    'Volkswagon', 'Volvo'
  ];

  $scope.addTest = function(){
    console.log('Added from the controller');
  };

  $scope.removeTest = function(){
    console.log('Removed from the controller');
  };

  $scope.addNew = function(){
    $scope.suggestions.push('Mitsubishi');
  };
};