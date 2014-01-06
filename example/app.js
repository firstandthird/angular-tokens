angular.module('example-app', ['ftTokens']);

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
    console.log('Added from the controller', $scope.selected);
  };

  $scope.removeTest = function(){
    console.log('Removed from the controller', $scope.selected);
  };

  $scope.addNew = function(){
    $scope.suggestions.push('Mitsubishi');
  };

  $scope.selected = ['Test'];

  $scope.addRandomValueToModel = function(){
    var value = "random_" + (Math.random() / +new Date()).toString(36).replace(/[^a-z]+/g, '');
    $scope.selected.push(value);
  }
};
