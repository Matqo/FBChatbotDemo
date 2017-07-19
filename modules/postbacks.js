"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter'),
    nforce = require('nforce');

exports.q1 = (sender, values) => {
    console.log('q1');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question2(response), sender);
    });
};

exports.q2 = (sender, values) => {
    console.log('q2');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question3(response), sender);
    });
};

exports.q3 = (sender, values) => {
    console.log('q3');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {

        let theObject = nforce.createSObject('Case');
        theObject.set('Subject', 'FB FrameHelp: Frame malfunction, under warranty RMA request');
        theObject.set('ContactId', '003f4000002ML0v');
        theObject.set('RecordTypeId', '012f4000000krv5AAA');
        theObject.set('Origin', 'Messenger Bot');
        theObject.set('Status', 'Closed');
        theObject.set('Description', 'Case created by FB FrameHelp Bot');

        //Salesforce update records
        salesforce.createRecord(response, theObject).then(recordResult => {
            messenger.send({text: `Great. Your new Frame should arrive in 5-7 business days. `}, sender);
            setTimeout(function(){
                messenger.send({text: `I've also sent an email confirmation with the return shipping label to cara@gmail.com. If there's anything else I can help you with please let me know.`}, sender);
            }, 1500);
        });
    });
};

exports.getStarted = (sender, values) => {
    console.log('getStarted');
    console.log('values: ', values);
    /*
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `GetStarted Button clicked`}, sender);
    });
    */
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hi I'm FrameFixer. I ran some diagnostics and unfortunately it looks like you'll need a replacement Frame.`}, sender);
        setTimeout(function(){
            messenger.send(formatter.question1(), sender);
        }, 1000);
    });
};
