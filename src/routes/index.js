'use strict';

/*
    An index of all the routes.
*/
const routes = [
    require('./auth-routes'),
    require('./tags-routes')
];

module.exports = routes.flat();
