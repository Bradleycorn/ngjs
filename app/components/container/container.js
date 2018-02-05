function ContainerController($scope, $element, $attrs) {
    ctrl = this;

    this.panes = [];
    this.currentPaneIndex = 0;

    this.init = function() {
        this.loadConfig();
        this.currentPaneIndex = 0;
    }

    this.loadConfig = function() {
        this.panes.push([
            {placeholder: 'First Item', name: 'first', value: null, required: false },
            {placeholder: 'Second Item', name: 'second', value: null, required: true }
        ]);

        this.panes.push([
            {placeholder: 'Third Item', name: 'third', value: null, required: true },
            {placeholder: 'Fourth Item', name: 'fourth', value: null, required: true }            
        ]);
    }

    this.goToPrevious = function() {
        this.currentPaneIndex--;
    }

    this.finishStep = function (model) {
        var currentPaneFields = this.panes[this.currentPaneIndex];

        currentPaneFields.forEach(function(field) {
            if (model.hasOwnProperty(field.name)) {
                field.value = model[field.name];
            }
        });

        if (this.currentPaneIndex < this.panes.length - 1) {
            this.currentPaneIndex++;
        } else {
            alert('Save');
        }
    }

    this.init();
}

angular.module('myApp').component('container', {
    templateUrl: 'components/container/container.html',
    controller: ContainerController
});