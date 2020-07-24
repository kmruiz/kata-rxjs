const { zip } = require('rxjs')
const { map } = require('rxjs/operators')

module.exports = (left, right) => {
    return zip(left, right)
        .pipe(
            map(([a, b]) => [a, b, a + b])
        )
}