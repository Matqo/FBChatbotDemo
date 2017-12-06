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
        messenger.send({text: `Bonjour ${response.first_name}, quelle est votre demande ?`}, sender);
    });
}; 

exports.start1 = (sender) => {
    console.log('start1');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Très bien. Dans quelle région êtes vous installé`}, sender);
    });
}; 

exports.start2 = (sender) => {
    console.log('start2');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question1(response), sender);
    });
}; 

exports.start3 = (sender) => {
    console.log('start3');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.finish1(response), sender);
    });
};    