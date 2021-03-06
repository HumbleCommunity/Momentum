angular
    .module('momentum')
    .directive('previewAction', previewAction);

function previewAction() {
   
  var directive = {
      restrict: 'E',
      templateUrl: '/partials/campaigns/actions/preview.html',
      scope: {
        bsTooltip: '@',
        item: '=',
        edit: '&',
        destroy: '&'
      },
      controller: controller,
      link: link
  };
  return directive;

  function controller($scope, $location) {

    $scope.toggleScript = function() {
        $scope.showScript = !$scope.showScript;
    }

    $scope.getScript = function() {
      if ($location.host() === 'localhost') var server = 'local'; else var server = 'live'; 

        var title = $scope.item.title.toString().toLowerCase()
          .replace(/\s+/g, '-')         // Replace spaces with -
          .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
          .replace(/\-\-+/g, '-')       // Replace multiple - with single -
          .replace(/^-+/, '')           // Trim - from start of text
          .replace(/-+$/, '')           // Trim - from end of text
          .substring(0,10);          
        return 'git clone https://github.com/MomentumBuild/angular-actions-example '+title+'; cd '+title+'; sudo npm install; bower update; gulp --server '+server+' --camp '+$scope.item.campaign+' --action '+ $scope.item.id;
    }

  }

  function link(scope, element, attr) {
    scope.showScript = false;
  }

}
