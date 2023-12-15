/**
 * Zadanie 1.
 */

function welcome(name) {
}
const welcomeMessage = welcome("Wojtek")
console.log(welcomeMessage)
  
/**
 * Zadanie 2.
 */

function rectangleArea(a, b) {
    return a * b
}
const result = rectangleArea(5, 10)
console.log(result)


/**
 * Zadanie 3.
 */

const personData = {
    address: {
        zipCode: '62-200'
    }
}
function getPersonZipCode(person) {
    return person.address.zipCode
}
const personZipCode = getPersonZipCode(personData)
console.log(personZipCode)
