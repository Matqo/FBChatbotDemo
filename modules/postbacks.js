"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');
/*
exports.confirm_visit = (sender, values) => {
	console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.setWeather(values).then(weatherResponse => {
            messenger.send(formatter.question4(response), sender);
        });
    });
};
exports.addToCart = (sender, values) => {
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `OK, thank you. I added that to your cart.`}, sender);
        setTimeout(function(){
            messenger.send({text: `Can I help you any further today?`}, sender);
        },500);
    });
};

exports.blank = (sender, values) => {
    console.log('inside blank');
};

exports.lastQuestion = (sender, values) => {
    console.log('inside lastQuestion');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question9(response), sender);
    });
};

exports.findPin = (sender, values) => {
    console.log('inside findPin');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.picture8(response), sender);
        setTimeout(function(){
            messenger.send(formatter.question8(response), sender);
        }, 750);
    });
};*/

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
        messenger.send({text: `Great. Your new Frame should arrive in 5-7 business days. `}, sender);
        setTimeout(function(){
            //Salesforce update records
            messenger.send({text: `Salesforce update records`}, sender);
            //messenger.send(formatter.question4(response), sender);
        },1000);
    });
};
