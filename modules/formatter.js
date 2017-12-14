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
                "text":"Combien d’employé ?",
                "buttons":[
                      {
                            "type":"postback",
                            "title":"<10",
                            "payload":"q1,<10"
                      },
                      {
                            "type":"postback",
                            "title":">11 et <100",
                            "payload":"q1,>11 et <100"
                      },
                      {
                            "type":"postback",
                            "title":">101",
                            "payload":"q1,>101"
                      }
                ]
            }
        }
    }
};

exports.finish1 = response => {
    console.log('question1');
    return {
        "attachment": {
            "type":"template",
            "payload": {
                "template_type":"button",
                "text":"Parfait. Business France a une forte activité d’accompagnement à l’export vers les USA. Nous pouvons vous aider. Veuillez compléter votre profil via le lien suivant.",
                "buttons":[
                      {
                            "type":"web_url",
                            "title":"Site Business France",
                            "url":"https://sdodemo-main-15fe483aefe.force.com/professional/s/pardotform?t=1512475181334"
                      }
                ]
            }
        }
    }
};