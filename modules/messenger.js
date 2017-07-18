"use strict";

let request = require('request'),
    FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN,
    moment = require("moment"),
    numeral = require("numeral"),
    nodeGeocoder = require('node-geocoder'),
    Forecast = require('forecast');

let util = require('util');
// Initialize 
var forecast = new Forecast({
    service: 'darksky',
    key: '784aaa420a59c6ac369b1d6c7a369752',
    units: 'celcius',
    cache: true,      // Cache API requests 
    ttl: {            // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/ 
        minutes: 30
    }
});
var options = {
      provider: 'google',
      apiKey: 'AIzaSyBhSMlK5lCtcEP8Bo6XUf2WOw6gicKHKCY'
};
var geocoder = nodeGeocoder(options);
let weather = {};

exports.send = (message, recipient) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: FB_PAGE_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: recipient},
            message: message
        }
    }, (error, response) => {
        if (error) {
            console.log('Error sending message: ', error);
        } else if (response.body.error) {
            console.log('Error: ', response.body.error);
        } else{
            console.log('Send: ', response.body);
        }
    });
};

exports.getUserInfo = (userId) => {

    return new Promise((resolve, reject) => {

        request({
            url: `https://graph.facebook.com/v2.6/${userId}`,
            qs: {fields:"first_name,last_name,profile_pic", access_token: FB_PAGE_TOKEN},
            method: 'GET',
        }, (error, response) => {
            if (error) {
                console.log('Error sending message: ', error);
                reject(error);
            } else if (response.body.error) {
                console.log('Error: ', response.body.error);
            } else {
                console.log('getUserInfo: ', response.body);
                resolve(JSON.parse(response.body));
            }
        });

    });
};