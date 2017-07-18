"use strict";

let messenger = require('./messenger'),
    formatter = require('./formatter'),
    salesforce = require('./salesforce'),
    visionService = require('./vision-service-mock'),
    nodeGeocoder = require('node-geocoder');

var options = {
      provider: 'google'
};

var geocoder = nodeGeocoder(options);

exports.processUpload = (sender, attachments) => {
    if (attachments.length > 0) {
        let attachment = attachments[0];
        console.log('attachment: ', attachment);
        if (attachment.type === "image") {
            console.log('image attachment');
            /*


            messenger.getUserInfo(sender).then(response => {
                //salesforce.updateLead({zip: res[0].zipcode}, sender).then(() => {
                    messenger.send(formatter.question65(response), sender);
                    setTimeout(function(){
                        messenger.send(formatter.question6(response), sender);
                    }, 1000);
                //});
            });



            */
        } else if (attachment.type === "location") {

            console.log('attachment.payload.coordinates.lat: ', attachment.payload.coordinates.lat);
            console.log('attachment.payload.coordinates.long: ', attachment.payload.coordinates.long);
            console.log('geocoder: ', geocoder);

            geocoder.reverse({lat: attachment.payload.coordinates.lat, lon: attachment.payload.coordinates.long}).then(function(res) {
                console.log('result: ', res);
                console.log('ZIPCODE!: ', res[0].zipcode);
                
                if(!res[0].zipcode){
                    res[0].zipcode = 'Cannot determine zip code.';
                }
                /*
                messenger.getUserInfo(sender).then(response => {
                    salesforce.updateLead({zip: res[0].zipcode}, sender).then(() => {
                        messenger.send(formatter.renderRooms(response), sender);
                    });
                });
                */
            }).catch(function(err) {
                console.log('err: ', err);
            });

        } else {
            messenger.send({text: 'This type of attachment is not supported'}, sender);
        }
    }
};
