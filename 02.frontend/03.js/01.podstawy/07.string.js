// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let a = 'Adam'

// dodawanie stringow (forma z dodawaniem)
a = a + ' Mazur'

const b = 'Pawel'

// dodawanie stringow (forma z interpolacja)
a = `${b} Mazur` // Pawel Mazur

// najczesciej uzywane metody
const length = 'jan nowak'.length // 9
const toUpperCase = 'jan nowak'.toUpperCase() // 'JAN NOWAK'
const toLowerCase = 'JAN NOWAK'.toLowerCase() // 'jan nowak'
const split1 = 'jan nowak'.split(' ') // ['jan', 'nowak']
const split2 = 'jan nowak'.split('') // ['j', 'a', 'n', ' ', 'n', 'o', 'w', 'a', 'k']
const includes1 = 'jan nowak'.includes('nowak') // true
const includes2 = 'jan nowak'.includes('robak') // false
const replace = 'jan nowak'.replace('nowak', 'robak') // 'jan robak'
