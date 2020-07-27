const { zip } = require('rxjs')
const { map } = require('rxjs/operators')

// zip(observable[a], observable[b]) => observable[a, b]
module.exports = (left, right) => {
    return zip(left, right)
        .pipe(
        )
}