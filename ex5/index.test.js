const exercise = require('./');
const { toArray, take } = require('rxjs/operators');
const { range } = require('rxjs');

const A = range(0, 1000)
const B = range(50, 1000)

describe('Exercise 5', () => {
    it('should return a tuple of numbers together from both observables and the sum', (done) => {
        const result = exercise(A, B)
        result
            .pipe(take(5), toArray())
            .subscribe(next => {
                expect(next).toEqual([[0, 50, 50], [1, 51, 52], [2, 52, 54], [3, 53, 56], [4, 54, 58]])
                done()
            })
    })
})