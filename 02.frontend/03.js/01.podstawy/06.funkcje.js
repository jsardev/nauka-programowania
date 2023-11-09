/**
 * FUNKCJE
 *
 * - moga miec input
 * - moga miec output
 *
 * function test1(param1) {
 * 					^- to jest input funkcji
 * 		return 'something'
 * 					^- to jest output funkcji (wartosc ktora funkcja zwraca)
 * }
 *
 * const a = test1() // a = 'something'
 *
 * function test2() {
 * 		return 'whatever'
 * }
 *
 * const b = test2() // b = 'whatever'
 *
 * function test3() {
 * 		console.log('asd')
 * }
 *
 * const c = test3() // c = undefined
 *
 */

// tworzenie funkcji (standardowa)
function zrobCosTam(param1, param2) {
  console.log(param1, param2);
}

// wywolanie funkcji (standardowa)
zrobCosTam("hello", "world");

// funkcja zwracająca wartość
function stworzTablice() {
  return [];
}

// tworzenie funkcji (strzalkowa - `arrow function`)
const zrobCosTam = (param1, param2) => {
  console.log(param1, param2);
};

// wywolanie funkcji (strzalkowa)
// BEZ ROZNICY, TO SAMO
zrobCosTam("asd1", "asd2");
