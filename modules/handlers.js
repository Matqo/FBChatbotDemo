"use strict";

let messenger = require('./messenger'),
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
        messenger.send({text: `Hi ${response.first_name}, this is your Whistles Chatbot Agent, how can I help you today?`}, sender);
    });
}; 

exports.start1 = (sender) => {
    console.log('start1');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Thank you ${response.first_name}, we are sorry to hear you didn't like the dress, however, we can fix this.  Please see some options below.  If one of these options doesn't work for you, please select Transfer to an Agent`}, sender);
        setTimeout(function(){
            messenger.send(formatter.sendButtons(response), sender);
        },500);
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