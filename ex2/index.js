const { range } = require('rxjs')
const { filter } = require('rxjs/operators')

module.exports = (number) => {
    return range(0, number)
        .pipe(
            filter(num => num > 0),
            filter(num => num % 2 === 0)
        )
}