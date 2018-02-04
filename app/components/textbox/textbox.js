function TextboxController($scope, $element, $attrs) {

    this.init = function () {
        if (this.config.value === null || this.config.value === undefined) {
            this.config.value = '';
        }
    }

    this.init();
}

angular.module('myApp').component('textBox', {
    templateUrl: 'components/textbox/textbox.html',
    controller: TextboxController,
    bindings: { "config": '<', "value": '<' }
});