const exercise = require('./');
const { toArray } = require('rxjs/operators');

const SENTENCES = ['kek hue', 'hue kek', 'so rocky', 'rocky fancy', 'rx rocky']
describe('Exercise 4', () => {
    it('should return all unique words that are at least 3 characters in uppercase, considering that there are sentences in the haystack', (done) => {
        const result = exercise(SENTENCES)
        result.pipe(toArray())
            .subscribe(next => {
                expect(next).toEqual(['KEK', 'HUE', 'ROCKY', 'FANCY'])
                done()
            })
    })
})