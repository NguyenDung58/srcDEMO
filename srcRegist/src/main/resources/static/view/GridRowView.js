define(
    ['text!/view/template/grid-row-template.html', 'marionette'],
    function (html) {
        "use strict";
        var GridRowView = Marionette.ItemView.extend({
            ui: {
                button: ':button'
            },
            events: {
                'click @ui.button': 'onClickDeleteBtn'
            },
            tagName: "tr", 
            template: _.template(html),
            onClickDeleteBtn: function () {
                this.model.destroy();
            }
        });
        return GridRowView;
    }
);
            