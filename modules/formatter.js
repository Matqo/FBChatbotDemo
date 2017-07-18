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
                "text":"Can I get the replacement and return process started for you? It will take a few minutes.",
                "buttons":[
                      {
                            "type":"postback",
                            "title":"Yes",
                            "payload":"q1,Yes"
                      },
                      {
                            "type":"postback",
                            "title":"No",
                            "payload":"q1,No"
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
/*
exports.picture4 = response => {
    console.log('question4');
    let elements = [];
        elements.push(  
            {
                title: 'Image',
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?slide1.png'
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

exports.formatLiveAgent = response => {
    console.log('formatLiveAgent');
    return {
        "text":"Sounds good. Would you like to follow up with one of our agents to finalise the purchase? You may also proceed to purchase right away. ",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Talk to a Live Agent",
            "payload":"q4,Talk to a Live Agent"
          },
          {
            "content_type":"text",
            "title":"Self Service Payment",
            "payload":"q4,Self Service Payment"
          }
        ]
    }
};

exports.picture5 = response => {
    console.log('picture5');
    let elements = [];
        elements.push(  
            {
                title: 'Image',
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?slide2.png'
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

exports.question5 = response => {
    console.log('question5');
    return {
        "text":"Et face aux agressions votre peau...",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"N'est pas particulièrement sensible",
            "payload":"q5,N'est pas particulièrement sensible"
          },
          {
            "content_type":"text",
            "title":"Est sensible et elle tiraille",
            "payload":"q5,Est sensible et elle tiraille"
          },
          {
            "content_type":"text",
            "title":"Est réactive et elle rougit",
            "payload":"q5,Est réactive et elle rougit"
          }
        ]
    }
};

exports.question6 = response => {
    console.log('question6');
    return {
        "text":"D'accord ! Dernière question, quels sont les produits que vous utilisez régulièrement ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Gel nettoyant",
            "payload":"q6,Gel nettoyant"
          },
          {
            "content_type":"text",
            "title":"Crème de nuit",
            "payload":"q6,Crème de nuit"
          },
          {
            "content_type":"text",
            "title":"Sérum",
            "payload":"q6,Sérum"
          },
          {
            "content_type":"text",
            "title":"Compléments alimentaires",
            "payload":"q6,Compléments alimentaires"
          },
          {
            "content_type":"text",
            "title":"Crème de jour",
            "payload":"q6,Crème de jour"
          },
          {
            "content_type":"text",
            "title":"Gommage",
            "payload":"q6,Gommage"
          },
          {
            "content_type":"text",
            "title":"Masque",
            "payload":"q6,Masque"
          },
          {
            "content_type":"text",
            "title":"Démaquillant non rincé",
            "payload":"q6,Démaquillant non rincé"
          },
          {
            "content_type":"text",
            "title":"Contour des yeux",
            "payload":"q6,Contour des yeux"
          }
        ]
    }
};

exports.formatInsurance = response => {
    console.log('formatInsurance');
    let elements = [];
        elements.push(  
            {
                title: 'INSURANCE',
                "image_url": 'http://www.cbronline.com/wp-content/uploads/2017/05/insurance2.jpg',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Select",
                        "payload": "q2,insurance"
                    }
                ]
            },
            {
                title: 'MAINTENANCE',
                "image_url": 'https://mindtouch.com/engineering-our-success/wp-content/uploads/sites/8/2017/01/wordpress-website-maintenance-service.jpg',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Select",
                        "payload": "q2,maintenance"
                    }
                ]
            },
            {
                title: 'PREMIUM',
                "image_url": 'https://premium.co.nz/graphics/premiumlogo-trans-black.png',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Select",
                        "payload": "q2,premium"
                    }
                ]
            },
            {
                title: 'OTHER',
                "image_url": 'https://iamother.com/wp-content/uploads/2017/05/other-1.png',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Select",
                        "payload": "q2,other"
                    }
                ]
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

exports.picture8 = response => {
    console.log('picture8');
    let elements = [];
        elements.push(  
            {
                title: 'Heron Tower, London',
                subtitle: '110 Bishopsgate, Bishopsgate, London',
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?location.png'
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

exports.question8 = response => {
    console.log('question8');
    let elements = [];
        elements.push(  
            {
                title: 'CALAIS JACQUARD CC DES 4B',
                subtitle: "Ctre Cial Coeur De Vie 62100 Calais",
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?Yr-1.jpg',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Itinéraire",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Appeler",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Prendre rendez-vous",
                        "payload": "blank"
                    }
                ]
            },
            {
                title: 'COQUELLES-CC CITÉ EUROPE',
                subtitle: "Ctre Cial Cité Europe 1001 Boulevard Du Kent 62231 Coquelles",
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?Yr-2.jpg',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Itinéraire",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Appeler",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Prendre rendez-vous",
                        "payload": "lastQuestion"
                    }
                ]
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

exports.question9 = response => {
    console.log('question9');
    return {
        "text":"Sélectionnez votre créneau horaire",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Samedi 1 - 13h30",
            "payload":"q9,Samedi 1 - 13h30"
          },
          {
            "content_type":"text",
            "title":"Samedi 1 - 13h45",
            "payload":"q9,Samedi 1 - 13h45"
          },
          {
            "content_type":"text",
            "title":"Lundi 3 - 11h15",
            "payload":"q9,Lundi 3 - 11h15"
          },
          {
            "content_type":"text",
            "title":"Lundi 3 - 15h30",
            "payload":"q9,Lundi 3 - 15h30"
          },
          {
            "content_type":"text",
            "title":"Lundi 3 - 16h00",
            "payload":"q9,Lundi 3 - 16h00"
          }
        ]
    }
};

exports.question10 = response => {
    console.log('question10');
    return {
        "text":"Comment pouvons-vous continuer à vous aider ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Continuer mes achats depuis le site marchant Yves Rocher",
            "payload":"q10,Continuer mes achats depuis le site marchant Yves Rocher"
          },
          {
            "content_type":"text",
            "title":"Être mis en contact avec un conseiller Yves Rocher",
            "payload":"q10,Être mis en contact avec un conseiller Yves Rocher"
          }
        ]
    }
};
/*
exports.question4 = response => {
    console.log('question4');
    return {
        "text":"Pouvez-vous préciser la nature de la réclamation ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Assistance",
            "payload":"q4,Assistance"
          },
          {
            "content_type":"text",
            "title":"Réclamation",
            "payload":"q4,Réclamation"
          }
        ]
    }
};


exports.question5 = response => {
    console.log('question5');
    return {
        "text":"Quel est le motif de votre réclamation ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Paiement",
            "payload":"q5,Paiement"
          },
          {
            "content_type":"text",
            "title":"Duplicata",
            "payload":"q5,Duplicata"
          }
        ]
    }
};

exports.question6 = response => {
    console.log('question6');
    return {
        "text":"Comment souhaitez-vous etre recontacté ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Phone",
            "payload":"q6,Phone"
          },
          {
            "content_type":"text",
            "title":"Mail",
            "payload":"q6,Mail"
          },
          {
            "content_type":"text",
            "title":"SMS",
            "payload":"q6,SMS"
          },
          {
            "content_type":"text",
            "title":"Messenger",
            "payload":"q6,Messenger"
          }
        ]
    }
};

exports.question7 = response => {
    console.log('question7');
    return {
        "text":"Souhaitez-vous être mise en relation avec un agent ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Oui",
            "payload":"q7,Oui"
          },
          {
            "content_type":"text",
            "title":"Non",
            "payload":"q7,Non"
          }
        ]
    }
};

exports.question3 = response => {
    //moment.lang('de');
    
    var options = [
        moment().add(1, 'days').add(1, 'hours').format('ddd Do MMM [at] ha'),
        moment().add(2, 'days').add(2, 'hours').format('ddd Do MMM [at] ha'),
        moment().add(3, 'days').add(3, 'hours').format('ddd Do MMM [at] ha'),
        moment().add(4, 'days').add(4, 'hours').format('ddd Do MMM [at] ha'),
        moment().add(5, 'days').add(5, 'hours').format('ddd Do MMM [at] ha'),
    ];

    console.log('options: ', options);
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `When will you run?`,
                "buttons": [
                    {
                        "type": "postback",
                        "title": options[0],
                        "payload": "confirm_visit," + options[0]
                    },
                    {
                        "type": "postback",
                        "title": options[1],
                        "payload": "confirm_visit," + options[1]
                    },
                    {
                        "type": "postback",
                        "title": options[2],
                        "payload": "confirm_visit," + options[3]
                    }]
            }
        }
    };
};

exports.question4 = response => {
    return {
        "text":"Are you going to run yourself?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Yes",
            "payload":"q4,Yes"
          },
          {
            "content_type":"text",
            "title":"No",
            "payload":"q4,No"
          }
        ]
    }
};


exports.formatServiceContract = response => {
    console.log('In formatServiceContract: ', response);
    
    let elements = [];
    elements.push({
        title: response.get("name"),
        subtitle: response.get("name"),
    })

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
*/