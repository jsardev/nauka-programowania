const a = "asdasd" // string
const b = 5123 // number
const c = {} // object
const d = [1,2,3,"costam"] // object
const e = true // boolean
const f = function () {} // function

// pass by reference
const obj1 = { imie: 'kuba' }
const obj2 = obj1
obj1.imie = 'wiktor'
console.log(obj2.imie) // 'wiktor'

// pass by value
const str1 = 'kuba'
const str2 = str1
str1 = 'wiktor'
console.log(str2) // 'kuba'