'use strict';

const fs = require('fs');
const Rx = require('Rx');

exports.findUsers = {
  handler: (request, reply) => {
    let usersStream = new Rx.Subject();
    let read = Rx.Observable.fromNodeCallback(fs.readFile);

    let data = read('./data/users.json', 'utf8');
    data.subscribe(data => { usersStream.onNext(data); });

    usersStream.subscribe(users => { return reply(users); });
  }
};

exports.findPlaces = {
  handler: (request, reply) => {
    let placesStream = new Rx.Subject();
    let read = Rx.Observable.fromNodeCallback(fs.readFile);
    
    let data = read('./data/places.json', 'utf8');
    data.subscribe(data => { placesStream.onNext(data); });

    placesStream.subscribe(places => { return reply(places); });
  }
};
