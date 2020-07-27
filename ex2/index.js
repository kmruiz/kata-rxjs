const { range } = require('rxjs')
const { filter } = require('rxjs/operators')

//observable.pipe(...operators)
//filter(predicate)
module.exports = (number) => {
    return range(0, number)
        .pipe(
            // filter here
        )
}