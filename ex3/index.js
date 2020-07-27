const { of } = require('rxjs')
const { filter, map } = require('rxjs/operators')

// map(transformation function)
module.exports = (words) => {
    return of(...words)
        .pipe(
        )
}