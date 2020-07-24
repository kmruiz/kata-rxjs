const exercise = require('./');
const { toArray } = require('rxjs/operators');

const WORDS = ['kek', 'hue', 'so', 'rocky', 'rx']
describe('Exercise 3', () => {
    it('should return all words that are at least 3 characters in uppercase', (done) => {
        const result = exercise(WORDS)
        result.pipe(toArray())
            .subscribe(next => {
                expect(next).toEqual(['KEK', 'HUE', 'ROCKY'])
                done()
            })
    })
})