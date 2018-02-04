function TextboxController($scope, $element, $attrs) {

    this.init = function() {
    }

    this.init();
}

angular.module('myApp').component('textBox', {
    templateUrl: 'components/textbox/textbox.html',
    controller: TextboxController,
    bindings: { "value": '<', "name": '<' }
});