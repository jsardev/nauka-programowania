const object1 = { imie: "kuba" };

Object.assign(object1, { imie: "wiktor" }, { nazwisko: "robak" });

const object2 = {
    imie: 'kuba',
    nazwisko: 'sarnowski'
}
console.log(Object.keys(object2))
console.log(Object.values(object2))

const object3 = {
    imie: 'kuba',
    nazwisko: 'sarnowski',
}
// object3.adres = 'asdasd' // przed Object.freeze() zadziala
Object.freeze(object3)
object3.adres = 'asdasd' // po Object.freeze() nie zadziala
console.log(object3)