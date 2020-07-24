const { of } = require('rxjs')
const { filter, map, flatMap, distinct } = require('rxjs/operators')

module.exports = (sentences) => {
    return of(...sentences)
        .pipe(
            flatMap(sentence => sentence.split(' ')),
            filter(word => word.length >= 3),
            map(word => word.toUpperCase()),
            distinct()
        )
}