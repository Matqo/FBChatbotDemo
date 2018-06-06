"use strict";

//https://john-paul-facebook-bot-demo.herokuapp.com/images?location.jpg

let moment = require("moment"),
    numeral = require("numeral");

exports.sendButtons = response => {
    console.log('In sendButtons: ', response);
    let elements = [];

    elements.push({
        "type":"web_url",
        "url":"https://www.messenger.com",
        "title":"Return for Refund"
    });
    elements.push({
        "type":"web_url",
        "url":"https://www.messenger.com",
        "title":"In Store Credit"
    });
    elements.push({
        "type":"postback",
        "title":"Exchange",
        "payload":"exchange"
    });
    elements.push({
        "type":"web_url",
        "url":"https://www.messenger.com",
        "title":"Transfer to an Agent"
    });
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "buttons": elements
            }
        }
    };
};

exports.sendImages = response => {
    console.log('In sendImages: ', response);
    let elements = [];

    elements.push({
        "title": "Capri Print Silk Bodycon",
        "description":"€219.00",
        "image_url": "https://phil-salesforce-bot.herokuapp.com/images?dress1.jpg",
        "buttons": [
            {
                "type": "postback",
                "title": "Select",
                "payload": "selectDress,dress1"
            }
        ]
    });
    elements.push({
        "title": "Palmyra Print Silk Bodycon",
        "description":"€219.00",
        "image_url": "https://phil-salesforce-bot.herokuapp.com/images?dress2.jpg",
        "buttons": [
            {
                "type": "postback",
                "title": "Select",
                "payload": "selectDress,dress2"
            }
        ]
    });
    elements.push({
        "title": "Peony Print Pleat Detail Dress",
        "description":"€195.00",
        "image_url": "https://phil-salesforce-bot.herokuapp.com/images?dress3.jpg",
        "buttons": [
            {
                "type": "postback",
                "title": "Select",
                "payload": "selectDress,dress3"
            }
        ]
    });
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

exports.dress1 = response => {
    console.log('In dress1: ', response);
    let elements = [];

    elements.push({
        "title": "Capri Print Silk Bodycon",
        "description":"€219.00",
        "image_url": "https://phil-salesforce-bot.herokuapp.com/images?dress1.jpg"
    });
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

exports.dress2 = response => {
    console.log('In dress2: ', response);
    let elements = [];

    elements.push({
        "title": "Palmyra Print Silk Bodycon",
        "description":"€219.00",
        "image_url": "https://phil-salesforce-bot.herokuapp.com/images?dress2.jpg"
    });
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

exports.dress3 = response => {
    console.log('In dress1: ', response);
    let elements = [];

    elements.push({
        "title": "Peony Print Pleat Detail Dress",
        "description":"€195.00",
        "image_url": "https://phil-salesforce-bot.herokuapp.com/images?dress3.jpg"
    });
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