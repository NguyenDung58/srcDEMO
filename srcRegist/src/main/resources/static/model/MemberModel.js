define(['backbone'], function () {
    'use strict';
    return Backbone.Model.extend({ 
        idAttribute: "userid", 
        urlRoot: 'http://localhost:8080/member', 
        defaults: { 
            userid: '',
            birthdate: '',
            email: ''
        },
        validate: function (attrs) { 
            var errors = {};
            var flg = false;
            if (attrs.userid === '') {
                flg = true;
                errors.userid = 'ユーザIDは必須入力です。';
                alert("ユーザIDは必須入力です。");
            }
            if (flg === true) {
                return errors;
            }
        }
    });
}); 