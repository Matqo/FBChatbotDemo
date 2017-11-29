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

let getBookings = (params) => {
    console.log('params: ', params);

    var q = `SELECT Id, FirstName, LastName FROM Contact WHERE FirstName = '${params.first_name}' AND LastName = '${params.last_name}'`;

    org.query({ query: q }, function(err, resp){

        if(!err && resp.records) {
            var theContactId = resp.records[0].get("Id");

            var q = `SELECT Id, Destination__c FROM Booking__c WHERE Contact__c = '${theContactId}'`;

            org.query({ query: theQ }, function(err, resp){

                if(!err && resp.records) {
                    var theList = resp.records;
                    resolve(theList);
                }
                else{
                    reject('No Bookings');
                }
            });
        }
        else{
            reject('No Contact');
        }
    });
    /*
    return new Promise((resolve,reject) => {
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
    */
};

let createRecord = (params, theObject) => {
    return new Promise((resolve,reject) => {
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
exports.getBookings = getBookings;