(function(){
  angular.module('ftTokens',[])
      .directive('tokens', [function(){
        return {
          restrict: 'A',
          scope : {
            tokens : '=',
            tokensSuggestions : '=',
            tokensSelected : '=ngModel',
            tokensAdd : '&',
            tokensRemove : '&'
          },
          link : function(scope, el){
            var $el = $(el),
                addCallback = scope.tokensAdd || angular.noop,
                removeCallback = scope.tokensRemove || angular.noop;

            $el.tokens({
              source : scope.tokensSuggestions || [],
              initValue : scope.tokensSelected
            });
            scope.tokens = $el.data('tokens');
            scope.syncing = false;

            var removeAll = function(){
              scope.syncing = true;
              var currentValue = scope.tokens.getValue().slice(0);
              for (var i = 0, length = currentValue.length; i < length; i++){
                var value = currentValue[i];
                scope.tokens.removeValue(value);
              }
              scope.syncing = false;
            };

            var addAll = function(){
              scope.syncing = true;
              for (var i = 0, length = scope.tokensSelected.length; i < length; i++){
                scope.tokens.addValue(scope.tokensSelected[i]);
              }
              scope.syncing = false;
            };

            $el.on('remove',function(e,value){
              if (!scope.syncing){
                scope.$apply(function(){
                  var index = scope.tokensSelected.indexOf(value);
                  scope.tokensSelected.splice(index,1);
                  removeCallback.call(this,e,value);
                });
              }
            });

            $el.on('add', function(e,value){
              if (!scope.syncing){
                scope.$apply(function(){
                  scope.tokensSelected.push(value);
                  addCallback.call(this,e,value);
                });
              }
            });

            scope.$watch('tokensSelected',function(newVal, oldVal){
              // This will happen if the model updates anywhere else
              if (oldVal !== scope.tokens.getValue()){
                removeAll();
                addAll();
              }
            },true);
            scope.$watch('tokensSuggestions',function(){
              scope.tokens.source = scope.tokensSuggestions || [];
            },true);
          }
        };
      }]);
})();