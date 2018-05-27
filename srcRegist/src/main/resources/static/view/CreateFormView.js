define(
    ['text!/view/template/create-form-template.html', 'marionette', 'modelbinder'],
    function (html) { 
        "use strict";
        var CreateFormView = Marionette.ItemView.extend({ 
            template: _.template(html), 
            modelbinder: null, 
            ui: { 
                "errormessage": "#errormessage"
            },
            bindings: { 
                "userid": "#txt_userid",
                "birthdate": "#txt_birthdate",
                "email": "#txt_email"
            },
            initialize: function(options) { 
                this.modelbinder = new Backbone.ModelBinder();
            },
            onRender: function() { 
                this.modelbinder.bind(this.model, this.el, this.bindings);
            },
            events: { 
                'click #btn_create': 'onClickCreateBtn'
            },
            onClickCreateBtn: function (e) {
                this.trigger("form:submit", this.model.clone());
            },
            clearForm: function () {
                this.ui.errormessage.html("");
                this.model.clear();
            }
        });
        return CreateFormView;
    }
);