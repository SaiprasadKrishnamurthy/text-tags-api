'use strict';

const Tags = require('../models/tags');


/**
 * Get tags.
 * @param {*} request
 * @param {*} reply
 */

const getTags = (request, h) => {

    const inputText = request.query.text;
    const tags = Tags.newTags();
    tags.inputText = inputText;
    tags.tags = ['TODO1', 'TODO2'];
    return h.response(tags);
};

module.exports = {
    getTags
};
