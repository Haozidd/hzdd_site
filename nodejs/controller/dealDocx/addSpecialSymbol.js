module.exports = function (obj,symbol) {

    for (const objKey in obj) {
        if (
            obj[objKey].constructor === Array
            && obj[objKey].length >= 2
            && obj[objKey][0].constructor === Object
            && Object.hasOwn(obj[objKey][0], 'name')) {

            for (let i = 0; i < obj[objKey].length - 1; i++) {
                Object.defineProperty(obj[objKey][i], 'name', {
                    value: obj[objKey][i].name + symbol,
                    enumerable: true,
                    writable: true
                })
            }

        }
    }
}