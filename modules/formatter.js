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

exports.bookingsRender = response => {
    console.log('bookingsRender');
    let elements = [];
    response.forEach(booking => {
            elements.push({
                title: booking.get("Destination__c"),
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?slide1.png',
                "buttons": [
                    
                    {
                        "type": "postback",
                        "title": "Activity or Service",
                        "payload": "activityService," + booking.getId()
                    },
                    {
                        "type": "postback",
                        "title": "Map to location",
                        "payload": "map," + booking.getId()
                    },
                    {
                        "type": "postback",
                        "title": "Booking Modification",
                        "payload": "bookingEdit," + booking.getId()
                    }
                ]
            })
        }
    );
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};

exports.question2 = response => {
    console.log('question1');
    return {
        "attachment": {
            "type":"template",
            "payload": {
                "template_type":"button",
                "text":"Do you want to add a Service or an Activities?",
                "buttons":[
                      {
                            "type":"postback",
                            "title":"Service",
                            "payload":"q2,Service,"+response
                      },
                      {
                            "type":"postback",
                            "title":"Activity",
                            "payload":"q2,Activity,"+response
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