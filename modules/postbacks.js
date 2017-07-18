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

        let theObject = nforce.createSObject(object);
        theObject.set('Description__c', `Product dropped, speaker malfunctioning`);
        theObject.set('Contact__c', '003f4000002ML0v');
        theObject.set('RMA_Status__c', 'In-Process');
        theObject.set('Under_Warranty__c', true);
        
        //Salesforce update records
        salesforce.createRecord(response, theObject).then(recordResult => {
            messenger.send({text: `Great. Your new Frame should arrive in 5-7 business days. `}, sender);
            setTimeout(function(){
                messenger.send({text: `I've also sent an email confirmation with the return shipping label to cara@gmail.com. If there's anything else I can help you with please let me know.`}, sender);
            }, 1500);
        });
    });
};
