/*!
 * angular-tokens - Angular directive for the tokens plugin
 * v0.1.0
 * http://github.com/firstandthird/angular-tokens/
 * copyright First + Third 2013
 * MIT License
*/
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

            $el.on('add', scope.tokensAdd);
            $el.on('remove', scope.tokensRemove);

            scope.$watch('tokensSuggestions',function(newValue, oldValue){
              console.log('Mitsuu');
              $el.data('tokens').source = scope.tokensSuggestions;
            },true);
          }
        };
      }]);
})();