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

let createLead = (customerFName, customerLName, customerId) => {
    if(customerFName){
        return new Promise((resolve,reject) => {
            var l = nforce.createSObject('Lead');
            l.set('Company', `Facebook Customer`);
            l.set('FirstName', `${customerFName}`);
            l.set('LastName', `${customerLName}`);
            l.set('Description', "Facebook id: " + customerId);
            l.set('Status', 'New');

            org.insert({ sobject: l }, function(err, resp){
                if(!err){
                    console.log('It worked!');
                    resolve(l);
                }
                else{
                    reject("An error occurred while creating a lead");
                }
            });
        });
    }
};

let updateLead = (params, sender) => {
    console.log('how is this getting called');
    if(params){
        return new Promise((resolve, reject) => {

            console.log("params: ", params);

            var q = 'SELECT Id, CreatedDate, Statut_locatif__c, Equipement__c, Assureur_actuel__c FROM Lead ORDER BY CreatedDate DESC LIMIT 1';

            org.query({ query: q }, function(err, resp){

                if(!err && resp.records) {

                    var theLead = resp.records[0];
                    if(params.q2){
                        theLead.set('Statut_locatif__c', params.q2);
                    }
                    if(params.q3){
                        theLead.set('Equipement__c', params.q3);
                    }
                    if(params.q4){
                        theLead.set('Assureur_actuel__c', params.q4);
                    }
                    console.log("theLead: ", theLead);
                    org.update({ sobject: theLead }, function(err, resp){
                        if(!err){
                            console.log('It worked!');
                            params = null;
                            console.log("params2: ", params);
                            resolve(theLead);
                        }
                        else{
                            params = null;
                            console.log("params2: ", params);
                            reject("Error updating the Lead");
                        }
                    });
                }
            });
        });
    }
};


login();

exports.org = org;
exports.createLead = createLead;
exports.updateLead = updateLead;