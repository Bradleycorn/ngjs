function ContainerController($scope, $element, $attrs) {
    ctrl = this;

    this.panes = [];
    this.currentPane = 0;

    this.init = function() {
        this.loadConfig();
        this.currentPane = 0;
    }

    this.loadConfig = function() {
        this.panes.push([
            {title: 'First Item', label: 'first', value: 1},
            {title: 'Second Item', label: 'second', value: 2}
        ]);

        this.panes.push([
            {title: 'Third Item', label: 'third', value: 3},
            {title: 'Fourth Item', label: 'fourth', value: 4}            
        ]);
    }

    this.finishStep = function(form) {
        for(i=0; i<this.panes[this.currentPane].length; i++) {
            this.panes[this.currentPane][i].title = form[this.panes[this.currentPane][i].label].$viewValue;
        }
        if (this.currentPane < this.panes.length - 1) {
            this.currentPane++;
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