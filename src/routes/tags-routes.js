'use strict';

const Handlers = require('../handlers');
const ValidationUtils = require('../utils/validation-utils');
const RouteUtils = require('../utils/route-utils');

/**
 * List of Data Transformation Routes
 */
const tagsRoutes = [
    {
        method: 'GET',
        path: '/api/v1/tags',
        options: {
            validate: {
                query: ValidationUtils.mandatoryStrings(['text']),
                options: {
                    allowUnknown: true
                }
            },
            handler: Handlers.tags.getTags,
            description: 'This endpoint will get the tags for a given text',
            notes: 'This endpoint will get the tags for a given text',
            tags: ['api', 'tags'],
            plugins: RouteUtils.routeResponseDescriptions() // Response descriptions for Swagger
        }
    }];
module.exports = tagsRoutes;

