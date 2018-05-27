define(['backbone', 'model/MemberModel'], function (Backbone, MemberModel) {
    'use strict';
    return Backbone.Collection.extend({ 
        model: MemberModel,  
        url: 'http://localhost:8080/member', 
        getAgeList: function () {
            var today = new Date();
            var numToday = today.getFullYear() * 10000 + today.getMonth() * 100
            + 100 + today.getDate();
	        var result = {
	            age10: 0,
	            age20: 0,
	            age30: 0,
	            age40: 0,
	            age50: 0,
	            etc: 0
	        };
	        _(this.models).each(function (item) {
	            var birthdateSplit = item.get("birthdate").split("-");
	            var numBirthdate = Number(birthdateSplit[0]) * 10000
	                + Number(birthdateSplit[1]) * 100 + 100
	                + Number(birthdateSplit[2]);
	            var age = Math.floor((numToday - numBirthdate) / 10000);
	            if (parseInt(age) < 20) {
	                result.age10++;
	            } else if (parseInt(age) < 30) {
	                result.age20++;
	            } else if (parseInt(age) < 40) {
	                result.age30++;
	            } else if (parseInt(age) < 50) {
	                result.age40++;
	            } else if (parseInt(age) < 60) {
	                result.age50++;
	            } else {
	                result.etc++;
	            }
	        });
	        return result;
        }
    });
});