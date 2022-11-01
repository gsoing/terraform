const FuzzyMatching = require('fuzzy-matching');
const mangas = require('../../resources/list.json')
 
const fm = new FuzzyMatching(mangas);
const MIN_SCORE = 0.6

const test = (proposition) => {
    const match = fm.get(proposition.try)
    if (match.distance > MIN_SCORE) {
        return match;
    }
    return null;
}

module.exports = {
    test: test
}