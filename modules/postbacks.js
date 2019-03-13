"use strict";

let messenger = require('./messenger'),
    formatter = require('./formatter'),
    nforce = require('nforce');


exports.exchange = (sender, values) => {
    console.log('exchange');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `OK, that is great ${response.first_name}, let's find that Order?`}, sender);
        setTimeout(function(){
            messenger.send({text: `Here is what I found ${response.first_name}`}, sender);  
        },500);
        setTimeout(function(){
            messenger.send(formatter.sendImage(response), sender);
        },1000);
        setTimeout(function(){
            messenger.send({text: `${response.first_name} because your order is not yet picked, we can change the delivery if needed.  This can be the date of delivery or changing to in store collect.  What would you like to do?`}, sender);  
        },1500);
        setTimeout(function(){
            messenger.send(formatter.sendButtons2(response), sender);
        },2000);
    });
};

exports.selectDress = (sender, values) => {
    console.log('selectDress');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        if(values[0] == 'dress1'){
            messenger.send(formatter.dress1(values), sender);
            setTimeout(function(){
                messenger.send({text: `Is there anything else that we can do for you today ${response.first_name}?`}, sender);
            },500);
        }
        else if(values[0] == 'dress2'){
            messenger.send(formatter.dress2(values), sender);
            setTimeout(function(){
                messenger.send({text: `Is there anything else that we can do for you today ${response.first_name}?`}, sender);
            },500);
        }
        else if(values[0] == 'dress3'){
            messenger.send(formatter.dress3(values), sender);
            setTimeout(function(){
                messenger.send({text: `That is a great Choice, ${response.first_name}.  I have added these to your order which you can pick up in store!`}, sender);
            },500);
            setTimeout(function(){
                messenger.send({text: `Is there anything else I can help you with today ${response.first_name}?`}, sender);
            },1000);
        }
        
    });
};

exports.compLook = (sender, values) => {
    console.log('exchange');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `OK, that is great ${response.first_name}, let's find that Order?`}, sender);
        setTimeout(function(){
                messenger.send({text: `Based on your purchase PREDATOR 19.3 FIRM GROUND BOOTS we would recommend the following items`}, sender);
            },500);
        setTimeout(function(){
            messenger.send(formatter.sendImages(response), sender);  
        },1000);
    });
};

exports.map = (sender, values) => {
    console.log('map');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        //messenger.send(formatter.question3(response), sender);
    });
};

exports.sendMap = (sender, values) => {
    console.log('map');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        setTimeout(function(){
            messenger.send({text: `Looking at your preferences, your favourite pick up preference store is OFFICE, 100 Commercial St, London E1 6LZ, UK`}, sender);
        },500);

        setTimeout(function(){
            messenger.send(formatter.sendMap(response), sender);
        },1000);
        setTimeout(function(){
            messenger.send(formatter.sendQuestion(response), sender);
        },1500);
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

exports.yes = (sender) => {
    console.log('yes');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `${response.first_name}, that is now changed to in store collection. You can speak to any member of our Team in store with *REF: 287348870-34*`}, sender);
        setTimeout(function(){
            messenger.send({text: `Is there anything else we can help you with today ${response.first_name}?`}, sender);  
        },500);
        
        setTimeout(function(){
            messenger.send(formatter.sendButtons(response), sender);
        },1000);


    });
};
