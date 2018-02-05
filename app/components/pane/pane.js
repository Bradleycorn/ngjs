function PaneController($scope, $element, $attrs) {

    this.init = function() {
    }

    this.finishStep = function(form) {

        // don't process if the form is not valid
        if (form.$invalid) { 
            // set the '$touched' property on each form element
            // so that validation errors will get displayed if present
            this.items.forEach(function(item) {
                form[item.name].$setTouched(true);
            });
    
            return; 
        }

        var formValues = {};
        
        this.items.forEach(function(item) {
            formValues[item.name] = form[item.name].$viewValue;
        });

        this.onCompleteStep({model: formValues});
    }

    this.init();
}

angular.module('myApp').component('pane', {
    templateUrl: 'components/pane/pane.html',
    controller: PaneController,
    bindings: { "items": '<', "onCompleteStep": '&' }
});