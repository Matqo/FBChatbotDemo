"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.test = (sender) => {
    console.log('test');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `test Success`}, sender);
    });
};

exports.start = (sender) => {
    console.log('start');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello I am your digital concierge. How can I help you today?`}, sender);
        setTimeout(function(){
            messenger.send(formatter.question1(), sender);
        }, 1000);
    });
};         