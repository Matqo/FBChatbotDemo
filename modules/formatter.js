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
    "type":"postback",
    "title":"Complete the Look",
    "payload":"compLook"
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

exports.sendButtons2 = response => {
console.log('In sendButtons: ', response);
let elements = [];

elements.push({
    "type":"web_url",
    "url":"https://www.messenger.com",
    "title":"Change the Date"
});
elements.push({
    "type":"postback",
    "title":"Collect in Store",
    "payload":"sendMap"
});
/*elements.push({
    "type":"web_url",
    "url":"https://www.messenger.com",
    "title":"Exchange"
});*/

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

exports.sendButtons3 = response => {
console.log('In sendButtons: ', response);
let elements = [];

elements.push({
    "type":"postback",
    "title":"Yes",
    "payload":"yes"
});
elements.push({
    "type":"web_url",
    "url":"https://www.messenger.com",
    "title":"No"
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
    "title": "Adidas Nmd R1 Trainers Core Black Lush Red",
    "subtitle": "Price: £130.00 | Size: 11 | Status: Not yet Picked",
    "image_url": "https://i.imgur.com/YMQIjVi.png"
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

exports.sendImages = response => {
console.log('In sendImages: ', response);
let elements = [];

elements.push({
    "title": "Adidas Continental 80's White Grey Core Black Pink Gum Tfl",
    "subtitle":"£74.99",
    "image_url": "https://i.imgur.com/ogyuoB3.jpg",
    "buttons": [
        {
            "type": "postback",
            "title": "Select",
            "payload": "selectDress,dress1"
        }
    ]
});
elements.push({
    "title": "Adidas Deerupt Trainers",
    "subtitle":"£79.99",
    "image_url": "https://i.imgur.com/KgRI5bg.jpg",
    "buttons": [
        {
            "type": "postback",
            "title": "Select",
            "payload": "selectDress,dress2"
        }
    ]
});
elements.push({
    "title": "Adidas Stan Smith Trainers Core White Dark Blue",
    "subtitle":"£74.99",
    "image_url": "https://i.imgur.com/FtKiHr6.png",
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
    "image_url": "https://i.imgur.com/ogyuoB3.jpg"
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
    "image_url": "https://i.imgur.com/KgRI5bg.jpg"
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
    "title": "Adidas Stan Smith Trainers Core White Dark Blue",
    "subtitle":"£74.99",
    "image_url": "https://i.imgur.com/FtKiHr6.png"
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
    "image_url": "https://i.imgur.com/BhrPPD7.png"
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


exports.sendFeedback = response => {
//console.log('In sendQuestion: ', response);

return {
    "attachment": {
         "type":"web_url",
  "url":"https://sdo-demo-main-166ce2cf6b6-1692e92b661.secure.force.com/webview",
  "title":"Leave Feedback",
  "webview_height_ratio": "compact",
  "messenger_extensions": "false",  
    }
};
};