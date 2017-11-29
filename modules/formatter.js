"use strict";

//https://john-paul-facebook-bot-demo.herokuapp.com/images?location.jpg

let moment = require("moment"),
    numeral = require("numeral");

exports.question1 = response => {
    console.log('question1');
    return {
        "attachment": {
            "type":"template",
            "payload": {
                "template_type":"button",
                "text":"How can I help you today?",
                "buttons":[
                      {
                            "type":"postback",
                            "title":"Booking",
                            "payload":"q1,Booking"
                      },
                      {
                            "type":"postback",
                            "title":"My Profile",
                            "payload":"q1,My Profile"
                      },
                      {
                            "type":"postback",
                            "title":"Information",
                            "payload":"q1,Information"
                      }
                ]
            }
        }
    }
};

exports.question2 = response => {
    console.log('question2');
    return {
        "attachment": {
            "type":"template",
            "payload": {
                "template_type":"button",
                "text":"Great. First I'll need to confirm your shipping address. Confirm Address: 332 Pine St, Berkeley, CA 94703",
                "buttons":[
                      {
                            "type":"postback",
                            "title":"Confirm",
                            "payload":"q2,Confirm"
                      },
                      {
                            "type":"postback",
                            "title":"Edit",
                            "payload":"q2,Edit"
                      }
                ]
            }
        }
    }
};

exports.question3 = response => {
    console.log('question3');
    return {
        "attachment": {
            "type":"template",
            "payload": {
                "template_type":"button",
                "text":"How fast do you need the new Frame?",
                "buttons":[
                      {
                            "type":"postback",
                            "title":"Standard (Free)",
                            "payload":"q3,Standard (Free)"
                      },
                      {
                            "type":"postback",
                            "title":"Express ($9.99)",
                            "payload":"q3,Express ($9.99)"
                      },
                      {
                            "type":"postback",
                            "title":"Next Day ($19.99)",
                            "payload":"q3,Next Day ($19.99)"
                      }
                ]
            }
        }
    }
};