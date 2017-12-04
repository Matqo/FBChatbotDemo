"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter'),
    nforce = require('nforce');

exports.q1 = (sender, values) => {
    console.log('q1');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        if(values = 'Booking'){
            salesforce.getBookings(response).then(bookingResponse => {
                console.log('bookingResponse: ', bookingResponse);
                messenger.send(formatter.bookingsRender(bookingResponse), sender);
            });
        }
    });
};

exports.activityService = (sender, values) => {
    console.log('activityService');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question2(values), sender);
    });
};
exports.map = (sender, values) => {
    console.log('map');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        //messenger.send(formatter.question3(response), sender);
    });
};
exports.bookingEdit = (sender, values) => {
    console.log('bookingEdit');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        //messenger.send(formatter.question3(response), sender);
    });
};

exports.q2 = (sender, values) => {
    console.log('q2');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        if(values[0] = 'Service'){
            salesforce.getServices(values[1]).then(serviceResponse => {
                console.log('serviceResponse: ', serviceResponse);
                messenger.send(formatter.serviceRender(serviceResponse), sender);
            });
        }
    });
};

exports.selectService = (sender, values) => {
    console.log('selectService');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question3(response), sender);
    });
};

exports.q3 = (sender, values) => {
    console.log('q3');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question4(response), sender);
    });
};

exports.q4 = (sender, values) => {
    console.log('q4');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        salesforce.createRecord(response).then(createdRecord => {
            messenger.send({text: 'Perfect, 3 Pizza Pepperoni - 2 persons will be delivered to your appartment at 19h30. The cost is 38.97 Euros. Is there anything else I can help you with?'}, sender);
        });
    });
};

exports.q3444 = (sender, values) => {
    console.log('q3');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {

        let theObject = nforce.createSObject('Case');
        theObject.set('Subject', 'FB FrameHelp: Frame malfunction, under warranty RMA request');
        theObject.set('ContactId', '003f4000002ML0v');
        theObject.set('RecordTypeId', '012f4000000krv5AAA');
        theObject.set('Origin', 'Messenger Bot');
        theObject.set('Status', 'Closed');
        theObject.set('Priority', 'High');
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
