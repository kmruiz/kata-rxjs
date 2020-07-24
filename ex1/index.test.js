const result = require('./index');
const exercise = require('./');
const { toArray } = require('rxjs/operators');

describe('Exercise 1', () => {
    it('should return an observable that returns numbers from 0 to 10', (done) => {
        const result = exercise()
        result.pipe(toArray())
            .subscribe(next => {
                expect(next).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                done()
            })
    })
})