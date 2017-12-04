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
    return new Promise((resolve,reject) => {
        var q = `SELECT Id, FirstName, LastName FROM Contact WHERE FirstName = '* Léa' AND LastName = '${params.last_name}'`;
        console.log('q: ',q);
        org.query({ query: q }, function(err, resp){

            if(!err && resp.records) {
                console.log('resp: ',resp.records);
                var theContactId = resp.records[0].get("Id");
                console.log(theContactId);

                var theQ = `SELECT Id, Destination__c, Name FROM Booking__c WHERE Contact__c = '${theContactId}'`;
                console.log('theQ: ',theQ);
                org.query({ query: theQ }, function(err2, resp2){

                    if(!err2 && resp2.records) {
                        console.log('resp2: ',resp2.records);
                        var theList = resp2.records;
                        resolve(theList);
                    }
                    else{
                        reject('No Bookings', err2);
                    }
                });
            }
            else{
                reject('No Contact', err);
            }
        });
    });
};

let getServices = (params) => {
    console.log('params: ', params);
    return new Promise((resolve,reject) => {
        var q = `SELECT Id, Name, Unit_Price__c, Pic_URL__c FROM Available_Activity__c WHERE Booking__c = '${params}'`;
        console.log('q: ',q);
        org.query({ query: q }, function(err, resp){

            if(!err && resp.records) {
                console.log('resp: ',resp.records);
                var theServices = resp.records;
                resolve(theServices);
            }
            else{
                reject('No Services', err);
            }
        });
    });
};

let createRecord = (params) => {
    return new Promise((resolve,reject) => {

        let theSelectedService = nforce.createSObject('Selected_Activity__c');
        theSelectedService.set('Name', `ROOM SERVICE - Pizza pepperoni 2 persons - LES ARCS 1950`);
        theSelectedService.set('Booking__c', 'a0I0O00000IpyDEUAZ');
        theSelectedService.set('Available_Activity__c', 'a1r0O000002YwKqQAK');
        theSelectedService.set('Contact__c', `0030O000024AdHJQA0`);
        theSelectedService.set('Quantity__c', 3);
        theSelectedService.set('Unit_Price__c', 12.99);

        org.insert({ sobject: theSelectedService }, function(err, resp){
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
exports.getServices = getServices;