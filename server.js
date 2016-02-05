'use strict';

const Hapi    = require('hapi');
const Api     = require('./api');

const routes  = [
  { method: 'GET', path: '/api/users',  config: Api.findUsers  },
  { method: 'GET', path: '/api/places', config: Api.findPlaces },
];

const server  = new Hapi.Server();

server.connection({ port: 25500 });
server.route(routes);

server.start(() => {
  console.log('RxJS API server running at', server.info.uri);
});