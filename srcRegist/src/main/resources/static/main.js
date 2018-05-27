(function() {
	'use strict';
	require.config({
		paths : {
			'marionette' : '/lib/backbone.marionette/lib/backbone.marionette',
			'backbone' : '/lib/backbone/backbone',
			'underscore' : '/lib/underscore/underscore',
			'jquery' : '/lib/jquery/dist/jquery',
			'modelbinder' : '/lib/backbone.modelbinder/Backbone.ModelBinder',
			'text' : './lib/requirejs-text/text',
		}
	});
	require([ 'controller/MainRouter', 'controller/MainController' ], function(
			MainRouter, MainController) {
		var App = Marionette.Application.extend({
			initialize : function(options) {
				var mainController = new MainController();
				new MainRouter({
					controller : mainController
				});
			}
		});
		var app = new App();
		app.on('start', function() {
			Backbone.history.start();
		});
		app.start();
	});
}).call(this);