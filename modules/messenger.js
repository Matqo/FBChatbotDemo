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
/*
exports.setWeather = (params) => {
    return new Promise((resolve, reject) => {
        console.log("params: ", params);
        if(params[0] == "q2"){
            weather.location = params[1];
            geocoder.geocode(params[1]).then(function(res) {
                console.log('result: ', res);
                weather.latitude = res[0].latitude;
                weather.longitude = res[0].longitude;
            }).catch(function(err) {
                console.log('err: ', err);
            });
        }
        else if(params[0] == "confirm_visit"){
            weather.datetime = params[1];
            weather.jsdate = moment(params[1], "ddd Do MMM [at] ha").format('YYYY-MM-DD[T]HH:MM:SS');
            forecast.get([weather.latitude, weather.longitude, weather.jsdate], function(err, weatherResult) {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(weatherResult);
                    weather.rain_chance = weatherResult.currently.precipProbability;
                    weather.temperature = weatherResult.currently.temperature;
                    weather.outlook2 = weatherResult.currently.summary;
                    if(weather.temperature >= 17.5 && weather.rain_chance >= 50){
                        weather.outlook = 'Good';
                    }
                    else if(weather.temperature < 17.5 && weather.rain_chance < 50){
                        weather.outlook = 'Bad';
                    }
                    else{
                        weather.outlook = 'Okay';
                    }
                }
            });
        }
        console.log("setWeather: ", weather);
        resolve(weather);
    });
};

exports.getWeather = (params) =>{
    return new Promise((resolve, reject) => {
        console.log("params: ", params);
        
        console.log("getWeather: ", weather);
        resolve(weather);
    });
};
*/
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
/*
exports.getSuggestion = (account) => {

    return new Promise((resolve, reject) => {

        var theResult = {};

        if(account.get("gender__c") == "Male"){
            theResult.gender = 1;
        }
        else if(account.get("gender__c") == "Female"){
            theResult.gender = 2;
        }

        if(account.get("Average_Speed_Overall__c") >= 12.5){
            theResult.speed = 3;
        }
        else if(account.get("Average_Speed_Overall__c") >= 7.5){
            theResult.speed = 2;
        }
        else if(account.get("Average_Speed_Overall__c") < 7.5){
            theResult.speed = 1;
        }

        if(weather.rain_chance >= 50){
            theResult.rain_proof = 2
        }
        else if(weather.rain_chance < 50){
            theResult.rain_proof = 1;
        }

        if(weather.temperature < 17.5){
            theResult.temperature = 1;
        }
        else if(weather.temperature >= 17.5){
            theResult.temperature = 2;
        }

        console.log("theResult: ", theResult);
        console.log("theWeather: ", weather);

        request({
            url: `https://pio-test-adidas-engine.herokuapp.com/queries.json`,
            method: 'POST',
            json : { 
                temperature: 1,//Because PIO dataset doesnt allow for anything more or less.
                gender: theResult.gender,
                rain_proof: theResult.rain_proof,
                speed: theResult.speed
            }
        }, (error, response) => {
            if (error) {
                console.log('Error sending message: ', error);
                reject(error);
            } else if (response.body.error) {
                console.log('Error: ', response.body.error);
            } else {
                console.log('No Error: ', response.body);
                var theResponse = JSON.stringify(response.body);
                console.log('theResponse: ', theResponse);
                resolve(JSON.parse(theResponse));
            }
        });

    });
};
*/