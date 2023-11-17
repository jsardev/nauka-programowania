const a = "jacek";
const b = "";

const a2 = Boolean(a);
const b2 = Boolean(b);

console.log({
  undefined: Boolean(undefined),
  null: Boolean(null),
  zero: Boolean(0),
  pustaTablica: Boolean([]),
  pustyObiekt: Boolean({}),
  pustaFunkcja: Boolean(function() {}),
});
