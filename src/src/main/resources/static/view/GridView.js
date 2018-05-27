define(
    ['text!/view/template/grid-template.html', 'view/GridRowView', 'marionette'],
    function (html, GridRowView) {
        "use strict";
        var GridView = Marionette.CompositeView.extend({ 
            childView: GridRowView, 
            childViewContainer: "tbody", 
            template: _.template(html)
        });
        return GridView;
    }
);