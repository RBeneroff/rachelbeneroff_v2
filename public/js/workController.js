(function() {
  angular
    .module('rbeneroff')
    .controller('WorkController', WorkController);

    function WorkController($scope) {
      $scope.templates =
       [{ name: 'rblends.html', url: 'rblends.html'},
        { name: '23kbullies.html', url: '23kbullies.html'},
        { name: 'design.html', url: 'design.html'}];
      $scope.template = $scope.templates[0];
    }

})(); //IIFE
