define(['marionette'], function (Marionette) {
    "use strict";
    return Marionette.AppRouter.extend({ 
        appRoutes: {
            '': 'home',     
            'home': 'home',
            'summary': 'summary',
            'create': 'create'
        }
    });
});