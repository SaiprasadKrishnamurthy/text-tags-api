'use strict';

const ErrorHandlers = require('../utils/error-handlers');
const Tags = require('../models/tags')


/**
 * Transforms the data based on the defined rules.
 * @param {*} request
 * @param {*} reply
 */

const getTags = async (request, h) => {
    const inputText = request.query.text;
    const tags = Tags.newTags()
    tags.inputText = inputText;
    tags.tags = ["TODO1", "TODO2"];
    return h.response(tags);
};

module.exports = {
    getTags
};
