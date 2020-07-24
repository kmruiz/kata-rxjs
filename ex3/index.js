const { of } = require('rxjs')
const { filter, map, flatMap, distinct } = require('rxjs/operators')

module.exports = (words) => {
    return of(...words)
        .pipe(
            filter(word => word.length >= 3),
            map(word => word.toUpperCase())
        )
}