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
        messenger.send({text: `Hi ${response.first_name}, this is your Office Virtual Agent, how can I help you today?`}, sender);
    });
}; 

exports.start1 = (sender) => {
    console.log('start1');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Thank you ${response.first_name}, I can help track your item.  Please see some options below.  If one of these options doesn't work for you, please select Transfer to an Agent`}, sender);
        setTimeout(function(){
            //messenger.send({text: `Your Options are as follows`}, sender);
            messenger.send(formatter.sendButtons(response), sender);
        },500);
    });

}; 

exports.start2 = (sender) => {
    console.log('start2');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `No problem at all ${response.first_name}.`}, sender);
        setTimeout(function(){
            messenger.send({text: `Looking at your preferences, your favourite pick up preference store is 44-46 Brushfield Street.`}, sender);  
        },500);
        setTimeout(function(){
            messenger.send(formatter.sendMap(response), sender);
        },1000);
        setTimeout(function(){
            messenger.send(formatter.sendQuestion(response), sender);
        },1500);
        
    });
}; 

exports.yes = (sender) => {
    console.log('yes');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Can you bring the return item with you and speak to any member of our Team in store with REF: 287348870-34`}, sender);
        setTimeout(function(){
            messenger.send({text: `Is there anything else we can help you with today ${response.first_name}?`}, sender);  
        },500);

    });
};

exports.start3 = (sender) => {
    console.log('start3');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `You are very welcome ${response.first_name}, have a great day!`}, sender);
		messenger.send(formatter.sendFeedback(response), sender);

		setTimeout(function(){
    	},1000);

    });
    
};    