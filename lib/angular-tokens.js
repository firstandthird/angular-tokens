(function(){
  angular.module('tokens',[])
      .directive('tokens', [function(){
        return {
          restrict: 'A',
          scope : {
            tokensSuggestions : '=',
            tokensAdd : '&',
            tokensRemove : '&'
          },
          link : function(scope, el){
            var $el = $(el);

            $el.tokens({source : scope.tokensSuggestions });
            scope.tokens = $el.data('tokens');

            $el.on('add', scope.tokensAdd);
            $el.on('remove', scope.tokensRemove);

            scope.$watch('tokensSuggestions',function(){
              scope.tokens.source = scope.tokensSuggestions;
            },true);
          }
        };
      }]);
})();