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
        messenger.send({text: `Hi I'm FrameFixer. I ran some diagnostics and unfortunately it looks like you'll need a replacement Frame.`}, sender);
        setTimeout(function(){
            messenger.send(formatter.question1(), sender);
        }, 1000);
    });
};
/*
exports.next1 = (sender) => {
    console.log('next1');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Sure, here is your contract summary:`}, sender);
        setTimeout(function(){
            salesforce.getServiceContract(response).then(recResult => {
                messenger.send(formatter.formatServiceContract(recResult), sender);
            });
        }, 500);
        setTimeout(function(){
            messenger.send({text: `Do you a have any questions about your current contract or would you like to proceed to look at additional services?`}, sender);
        }, 2500);

    });
};

exports.next2 = (sender) => {
    console.log('next2');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.formatInsurance(), sender);
    });
};

exports.next3 = (sender) => {
    console.log('next3');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.formatLiveAgent(), sender);
    });
};
*/