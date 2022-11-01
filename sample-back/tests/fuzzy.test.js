const FuzzyMatching = require('fuzzy-matching');
const mangas = require('../resources/list.json');

test( 'some fussy test', () => {
    const fm = new FuzzyMatching(mangas);

    console.log(fm.get('naruto'));
    console.log(fm.get('nauto'));
    console.log(fm.get('naurto'));
    console.log(fm.get('naru'));
    expect(fm).not.toBe(null);
})