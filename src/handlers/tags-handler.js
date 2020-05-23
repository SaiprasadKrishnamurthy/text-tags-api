'use strict';

const Tags = require('../models/tags');
const SpellChecker = require('simple-spellchecker');

const Dictionary = SpellChecker.getDictionarySync('en-GB');

/**
 * Get tags.
 * @param {*} request
 * @param {*} reply
 */

const getTags = (request, h) => {

    const inputText = request.query.text;
    const words = inputText.split(/([_\W])/);
    const suggestions = [];
    const tags = Tags.newTags();
    tags.inputText = inputText;
    words
        .filter((word) => word.trim().length > 0)
        .forEach((word) => {

            if (!Dictionary.spellCheck(word)) {
                suggestions.push(Dictionary.getSuggestions(word));
            }
            else {
                suggestions.push([word]);
            }
        });
    const totalSuggestions = suggestions.length;
    const suggestionTexts = [];
    for (let i = 0; i < 1; ++i) {
        let text = '';
        for (let j = 0; j <= totalSuggestions; ++j) {
            const suggArr = suggestions[j];
            if (!suggArr || i >= suggArr.length) {
                text = text + '';
            }
            else {
                text = text + ' ' + suggArr[i];
            }
        }

        if (text) {
            suggestionTexts.push(text.trim());
            suggestionTexts.push(inputText.trim());
        }
    }

    tags.tags = suggestionTexts;
    return h.response(tags);
};

module.exports = {
    getTags
};
