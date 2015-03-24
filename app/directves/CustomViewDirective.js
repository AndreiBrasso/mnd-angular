
AppDirectives.directive('customView', function ($compile) {
  return {
    restrict: 'A',
    replace: true,
      scope:false,
      transclude: true,
      priority: 0,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.customView, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
});