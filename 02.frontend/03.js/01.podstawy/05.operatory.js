/** IFY, WARUNKI */

if (5 == 5) { // 5 == 5 = true
	// costam
} else {
	// costam
}

const a = 5
const b
const c = undefined

/**
 * wartosci rzutowane na `false`:
 * - undefined
 * - null
 * - 0
 * - ''
 * 
 * if(^ktoras z wartosci powyzej) {
 * 		nie wykona sie bo te wartosci sa false
 * } else {
 * 		wykona sie
 * }
 */

if () {
	// costam
} else if () {
	// costam
} else {
	// costam
}

/** PETLE */

// for

for (let index = 0; index < 2; index++) {
	// index = 0, index < 2 = true
	// WYKONUJE Z index = 1
	// index = 1, index < 2 = true
	// WYKONUJE Z index = 2
	// index = 2, index < 2 = false
	// KONIEC
}

// for..of

const tablica = [1, 5, 10]

for (let wartosc of tablica) {
	console.log(wartosc)
}

// for..in

const tablica = [1, 5, 10]

for (let wartosc in tablica) {
	console.log(wartosc)
}

const obiekt = {
	imie: 'asdasd',
	nazwisko: 'asdasd'
}

for (let wartosc in obiekt) {
	console.log(wartosc)
}

// while

let costam = 0

while (costam < 2) {
	console.log('costam')
	costam += 1
	// costam++
}