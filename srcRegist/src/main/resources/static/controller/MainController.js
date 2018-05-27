define([
    'marionette', 'view/ContentsLayoutView', 'view/GridView', 'view/CreateFormView',
    'view/SummaryView', 'model/MemberCollection', 'model/MemberModel'],
    function (
        Marionette, ContentsLayoutView, GridView, CreateFormView,
        SummaryView, MemberCollection, MemberModel 
    ) {
        "use strict";
        return Marionette.Object.extend({ 
            // Model 
            memberCollection: null,
            memberModel: null,
            // View 
            contentsLayoutView: null,
            gridView: null,
            createFormView: null,
            summaryView: null,
            initialize: function (options) { 
                // Initialize Model
                this.memberCollection = new MemberCollection();
                this.memberModel = new MemberModel();
                // Fetch Collection 
                this.memberCollection.fetch({
                    contentType: 'application/json; charset=UTF-8',
                    dataType: 'json',
                    async: false
                })
                // Initialize LayoutView
                this.contentsLayoutView = new ContentsLayoutView();
                // Initialize View
                this.createFormView = new CreateFormView({
                 model: this.memberModel
                });
                this.gridView = new GridView({
                    collection: this.memberCollection
                });
                this.summaryView = new SummaryView({
                    model: this.memberCollection
                });
                // Setting events 
                this.listenTo(this.createFormView, "form:submit", function (data) {
                    this.create(data);
                });
            },
            home: function (param) { 
                $("#nav_home").attr("class", "active");
                $("#nav_summary").attr("class", "");
                this.contentsLayoutView.getRegion('form')
                    .show(this.createFormView); 
                this.contentsLayoutView.getRegion('main').show(
                    this.gridView, {preventDestroy: true}
                );
            },
            summary: function (param) {
                $("#nav_home").attr("class", "");
                $("#nav_summary").attr("class", "active");
                this.contentsLayoutView.getRegion("form").empty(
                    {preventDestroy: true}
                );
                this.contentsLayoutView.getRegion('main').show(
                    this.summaryView, {preventDestroy: true}
                );
            },
            create: function (param) { 
                var self = this;
                this.memberCollection.create(param, { 
                    type: 'POST',
                    wait: true,
                    success: function (model, response) {
                        self.createFormView.clearForm();
                    },
                    error: function (model, response) {
                        var obj = jQuery.parseJSON(response.responseText);
                        self.createFormView.ui.errormessage.html(obj.message);
                    }
                });
            }
        });
    }
);