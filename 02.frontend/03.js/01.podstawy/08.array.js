const a = [1, 2, 3, 4, 5]

const length = a.length
const slice = a.slice(1, 4) // [2, 3, 4]
const splice = a.splice(1, 2) // [2, 3] bo zwraca usuniete + modyfikuje `a`
const shift = a.shift() // 1
const pop = a.pop() // 5
const unshift = a.unshift(1) // [1, 1, 2, 3, 4 ,5]
const push = a.push(5) // [1, 2, 3, 4, 5, 5]
const reverse = a.reverse() // [5, 4, 3, 2, 1]

const b = ['jacek', 'kuba', 'bogdan']
const indexOf = a.indexOf('kuba') // 1

const c1 = [1, 2]
const c2 = [3, 4]
const c3 = c1.concat(c2) // [1, 2, 3, 4]

const includes1 = a.includes(5) // true
const includes2 = a.includes(10) // false

const d1 = ['witaj', 'pozdrawiam', 'costam']
const join1 = d1.join('/') // 'witaj/pozdrawiam/costam'
const d2 = [7, 1, 1993]
const join2 = d2.join('/') // '7/1/1993'

const map1 = [1, 2, 3, 4]
function mapFn(element) {
    return element * 2
}
// const mapFn = (element) => {
//     return element * 2
// }
const map2 = map1.map(mapFn) // [2, 4, 6, 8]

const filter1 = ['bbb', 'bba', 'ccc', 'cca']
const filter2 = filter1.filter(gowno => {
    return !gowno.includes('a')
}) // ['bbb', 'ccc']

const some1 = ['bbb', 'bbx', 'ccc', 'cca']
const some2 = some1.some(element => {
    return element.includes('a')
}) // true

const every1 = ['bba', 'bba', 'cca', 'ccc']
const every2 = every1.some(element => {
    return element.includes('a')
}) // false bo 'ccc' nie ma 'a'

/**
 * Na pozniej
 */
// a.sort(compareFn)
// a.reduce()
// a.forEach()
// a.find()