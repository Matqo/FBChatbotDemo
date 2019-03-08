"use strict";

//https://john-paul-facebook-bot-demo.herokuapp.com/images?location.jpg

let moment = require("moment"),
    numeral = require("numeral");

exports.sendButtons = response => {
    console.log('In sendButtons: ', response);
    let elements = [];

    elements.push({
        "type":"postback",
        "title":"Track my Order",
        "payload":"exchange"
    });
    /*elements.push({
        "type":"web_url",
        "url":"https://www.messenger.com",
        "title":"Exchange"
    });*/
    elements.push({
        "type":"web_url",
        "url":"https://www.messenger.com",
        "title":"Complete the Look"
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
                "text": "Your Options are as follows",
                "buttons": elements
            }
        }
    };
};

exports.sendImage = response => {
    console.log('In sendMap: ', response);
    let elements = [];

    elements.push({
        "title": "PREDATOR 19.3 FIRM GROUND BOOTS",
        "subtitle": "£74.95 | Size: 11 | Status: Not yet Picked",
        "image_url": "https://i.imgur.com/Liee3W0.png"
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
    setTimeout(function(){
            messenger.send({text: `${response.first_name} because your order is not yet picked, we can change the delivery if needed.  This can be the date of delivery or changing to in store collect.  What would you like to do?`}, sender);  
        },500);
};

exports.sendImages = response => {
    console.log('In sendImages: ', response);
    let elements = [];

    elements.push({
        "title": "Capri Print Silk Bodycon",
        "subtitle":"£219.00",
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
        "subtitle":"£219.00",
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
        "subtitle":"£195.00",
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
        "subtitle":"£219.00",
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
        "subtitle":"£219.00",
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
    console.log('In dress3: ', response);
    let elements = [];

    elements.push({
        "title": "Peony Print Pleat Detail Dress",
        "subtitle":"£195.00",
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

exports.sendMap = response => {
    console.log('In sendMap: ', response);
    let elements = [];

    elements.push({
        "title": "Store Location",
        "image_url": "https://phil-salesforce-bot.herokuapp.com/images?map.png"
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

exports.sendQuestion = response => {
    console.log('In sendQuestion: ', response);
    let elements = [];

    elements.push({
        "type":"postback",
        "title":"Yes",
        "payload":"yes"
    });
    elements.push({
        "type":"postback",
        "title":"No",
        "payload":"no"
    });
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "Is this the Store you wish to pick up?",
                "buttons": elements
            }
        }
    };
};
