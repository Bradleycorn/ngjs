function PaneController($scope, $element, $attrs) {

    this.init = function() {
    }

    this.finishStep = function(form) {
        this.onCompleteStep(form);
    }

    this.init();
}

angular.module('myApp').component('pane', {
    templateUrl: 'components/pane/pane.html',
    controller: PaneController,
    bindings: { "items": '<', "onCompleteStep": '&' }
});