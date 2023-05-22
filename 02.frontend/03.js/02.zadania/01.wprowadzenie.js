// 1. stworz obiekt o nazwie `adres` zawierajacy: `kodPocztowy`, `ulica`, `miasto`

const adres ={
  kodPocztowy: '32132',
  ulica: 'ulica213',
  miasto: 'Gniezno'
}

// 2. stworz tablice o nazwie `typy` z 5 wartosciami typu (po kolei): boolean, object, string, number, function

const typy = [
  false,
  {xd:'gówno'},
  "dwadsadw",
  6,
  function (xd)
  {console.log(xd)}
]

// 3. stworz funkcje o nazwie `przywitajSie` z parametrami `imie`, ktora napisze `Czesc, {imie}` w konsoli
// podpowiedz: stringi mozna laczyc przez operator "+", np. "witaj" + "mieciu"

// to nie zadziala
// function() {
	
// }

function przywitajSie() {
	
}

const przywitajSie = function (imie) {
  console.log("Czesc, " + imie)
}