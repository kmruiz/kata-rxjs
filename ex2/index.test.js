const exercise = require('./');
const { toArray } = require('rxjs/operators');

const THRESHOLD = 10
describe('Exercise 2', () => {
    it('should return only even numbers bigger than 0', (done) => {
        const result = exercise(THRESHOLD)
        result.pipe(toArray())
            .subscribe(next => {
                expect(next).toEqual([2, 4, 6, 8])
                done()
            })
    })
})