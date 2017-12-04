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
                            "title":"Current Booking",
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
                title: booking.get("Name") + ' - ' + booking.get("Destination__c"),
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?slide1.png',
                "buttons": [
                    
                    {
                        "type": "postback",
                        "title": "Add a Service or an Activity",
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

exports.serviceRender = response => {
    console.log('serviceRender');
    let elements = [];
    response.forEach(service => {
            elements.push({
                title: service.get("Name") + ' - Price: ' + service.get("Unit_Price__c"),
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?slide1.png',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Select",
                        "payload": "selectService," + service.getId()
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

exports.question3 = response => {
    console.log('question3');
    return {
        "attachment": {
            "type":"template",
            "payload": {
                "template_type":"button",
                "text":"How many do you want?",
                "buttons":[
                      {
                            "type":"postback",
                            "title":"1",
                            "payload":"q3,1"
                      },
                      {
                            "type":"postback",
                            "title":"2",
                            "payload":"q3,2"
                      },
                      {
                            "type":"postback",
                            "title":"3",
                            "payload":"q3,3"
                      }
                ]
            }
        }
    }
};

exports.question4 = response => {
    console.log('question4');
    return {
        "attachment": {
            "type":"template",
            "payload": {
                "template_type":"button",
                "text":"At what time do you want them to be delivered?",
                "buttons":[
                      {
                            "type":"postback",
                            "title":"1 Hour",
                            "payload":"q4,1"
                      },
                      {
                            "type":"postback",
                            "title":"2 Hours",
                            "payload":"q4,2"
                      },
                      {
                            "type":"postback",
                            "title":"3 Hours",
                            "payload":"q4,3"
                      }
                ]
            }
        }
    }
};