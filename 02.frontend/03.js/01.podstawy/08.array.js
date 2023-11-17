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
const join1 = d.join('/') // 'witaj/pozdrawiam/costam'
const d2 = [7, 1, 1993]
const join2 = d.join('/') // '7/1/1993'

/**
 * Na pozniej
 */
// a.map()
// a.sort(compareFn)
// a.reduce()
// a.forEach()
// a.filter()
// a.every()
// a.some()
// a.find()