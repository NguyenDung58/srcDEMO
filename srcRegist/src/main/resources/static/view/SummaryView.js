define(
    ['text!/view/template/summary-template.html', 'marionette'],
    function (html) {
        "use strict";
        var SummaryView = Marionette.ItemView.extend({
            template: _.template(html),
            templateHelpers: function () { 
                return {
                    numMember: this.model.length,
                    ages: this.model.getAgeList()
                };
            }
        });
        return SummaryView;
    }
);