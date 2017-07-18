"use strict";

let nforce = require('nforce'),

    SF_CLIENT_ID = process.env.SF_CLIENT_ID,
    SF_CLIENT_SECRET = process.env.SF_CLIENT_SECRET,
    SF_USER_NAME = process.env.SF_USER_NAME,
    SF_PASSWORD = process.env.SF_PASSWORD;

let org = nforce.createConnection({
    clientId: SF_CLIENT_ID,
    clientSecret: SF_CLIENT_SECRET,
    redirectUri: 'http://localhost:3000/oauth/_callback',
    mode: 'single',
    autoRefresh: true
});

let login = () => {
    org.authenticate({username: SF_USER_NAME, password: SF_PASSWORD}, err => {
        if (err) {
            console.error("Authentication error");
            console.error(err);
        } else {
            console.log("Authentication successful");
        }
    });
};

let createRecord = (params, theObject) => {
    return new Promise((resolve,reject) => {
        /*
        let theObject = nforce.createSObject(object);
        theObject.set('Description__c', `Product dropped, speaker malfunctioning`);
        theObject.set('Contact__c', '003f4000002ML0v');
        theObject.set('RMA_Status__c', 'In-Process');
        theObject.set('Under_Warranty__c', true);
        */

        org.insert({ sobject: theObject }, function(err, resp){
            if(!err){
                var theReturnRecord = resp;
                console.log('Record created: ', theReturnRecord);
                resolve(theReturnRecord);
            }
            else{
                reject(err);
            }
        });
    });
};

login();

exports.createRecord = createRecord;