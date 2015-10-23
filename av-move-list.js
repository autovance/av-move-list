/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
TODO

@dependencies
TODO

@usage
partial / html:
TODO

controller / js:
TODO

//end: usage
*/

(function () {
  'use strict';

  angular
    .module('autovance.av-move-list', [])
    .directive('avMoveList', ['$q', MoveListDirective]);

  function MoveListDirective($q) {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        selectedLabel: '@',
        availableLabel: '@',
        displayAttr: '@',
        all: '=',
        numItems: '@',
        model: '=ngModel'
      },

      template:
      '<div class="multiSelect">' +
        '<div class="select">' +
          '<label class="control-label" for="multiSelectAvailable">{{ availableLabel }} ' +
              '({{ available.length }})</label>' +
          '<select ng-model="selected.available" multiple ' +
              'ng-options="e as e[displayAttr] for e in available" ng-size="{{ numItems }}"></select>' +
        '</div>' +
        '<div class="select buttons">' +
          '<button class="btn mover left" ng-click="add()" title="Add selected" ' +
              'ng-disabled="selected.available.length == 0">' +
            '<i class="glyphicon glyphicon-arrow-right"></i>' +
          '</button>' +
          '<button class="btn mover right" ng-click="remove()" title="Remove selected" ' +
              'ng-disabled="selected.current.length == 0">' +
            '<i class="glyphicon glyphicon-arrow-left"></i>' +
          '</button>' +
        '</div>' +
        '<div class="select">' +
          '<label class="control-label" for="multiSelectSelected">{{ selectedLabel }} ' +
              '({{ model.length }})</label>' +
          '<select ng-model="selected.current" multiple ' +
              'class="pull-left" ng-options="e as e[displayAttr] for e in model" ng-size="{{ numItems }}">' +
              '</select>' +
        '</div>' +
      '</div>',

      link: function(scope, elm, attrs) {
        scope.selected = {
          available: [],
          current: []
        };

        // Filters out items in 'all' that are also in 'selected'. Compares by value.
        function filterAvailable(all, selected) {
          var available = all.filter(function (item) {

            // item is selected if it is first OR second, OR third OR ... in the array of selected items
            var is_selected = selected.reduce(function (item_is_selected, selected_item) {
              return item_is_selected || angular.equals(item, selected_item);
            }, false);

            // item is available if it is NOT selected
            return !is_selected;
          });

          return available;
        }

        scope.refreshAvailable = function() {
          scope.available = filterAvailable(scope.all, scope.model);
          scope.selected.available = [];
          scope.selected.current = [];
        };

        scope.add = function() {
          scope.model = scope.model.concat(scope.selected.available);
          scope.refreshAvailable();
        };

        scope.remove = function() {
          scope.model = filterAvailable(scope.model, scope.selected.current);
          scope.refreshAvailable();
        };

        // Handles case when scope data hasn't been initialized yet
        var dataLoading = function(scopeAttr) {
          var loading = $q.defer();

          if(scope[scopeAttr]) {
            loading.resolve(scope[scopeAttr]);
          } else {
            scope.$watch(scopeAttr, function(newValue, oldValue) {
              if(newValue) {
                loading.resolve(newValue);
              }
            });
          }

          return loading.promise;
        };

        $q.all([dataLoading("model"), dataLoading("all")]).then(function (results) {
          scope.refreshAvailable();
        });
      }
    };
  }
})();
