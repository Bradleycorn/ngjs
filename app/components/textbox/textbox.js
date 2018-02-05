function TextboxController($scope, $element, $attrs) {
    // The form control for this input
    this.formCtrl;

    this.$onInit = function () {
        if (this.config.value === null || this.config.value === undefined) {
            this.config.value = '';
        }
    }

    this.$postLink = function() {
        this.formCtrl = this.form[this.config.name];
    }
}

angular.module('myApp').component('textBox', {
    templateUrl: 'components/textbox/textbox.html',
    controller: TextboxController,
    bindings: { 
        "config": '<', 
        "value": '<', 
        "form": '<' 
    }
});