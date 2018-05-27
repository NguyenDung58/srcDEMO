define(['marionette'], function () { 
    "use strict";
    var ContentsLayoutView = Marionette.LayoutView.extend({ 
        el: "#contents", 
        regions: { 
            form: "#contents_form",
            main: "#contents_main"
        }
    });
    return ContentsLayoutView; 
});