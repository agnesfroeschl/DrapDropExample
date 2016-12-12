
angular.module("myApp").controller("DragDropController", function ($scope) {

    $scope.dragoverCallback = function (event, index, external, type) {
        $scope.logListEvent('dragged over', event, index, external, type);
        // Disallow dropping in the third row. Could also be done with dnd-disable-if.
        return index < 10;
    };

    $scope.dropCallback = function (event, index, item, external, type, allowedType) {
        $scope.logListEvent('dropped at', event, index, external, type);
        if (external) {
            if (allowedType === 'itemType' && !item.label) return false;
            if (allowedType === 'containerType' && !angular.isArray(item)) return false;
        }
        return item;
    };

    $scope.logEvent = function (message, event) {
        console.log(message, '(triggered by the following', event.type, 'event)');
        console.log(event);
    };

    $scope.logListEvent = function (action, event, index, external, type) {
        var message = external ? 'External ' : '';
        message += type + ' element is ' + action + ' position ' + index;
        $scope.logEvent(message, event);
    };


    $scope.model = [];
    /*init model*/
    var id = 1;
    for (var i = 0; i < 1; ++i) {
        $scope.model.push([]);
        for (var j = 0; j < 1; ++j) {
            $scope.model[i].push([]);
            for (var k = 0; k < 5; ++k) {
                $scope.model[i][j].push({
                    label: 'Item ' + id++,
                    name: 'box' + id
                });
            }
        }
    }

    $scope.$watch('model', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);




});