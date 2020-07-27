const { of } = require('rxjs')
const { filter, map, flatMap, distinct } = require('rxjs/operators')

// flatMap(transformation function)
// distinct()
module.exports = (sentences) => {
    return of(...sentences)
        .pipe(
        )
}