// functions_types.ts
// src/learning
// * Funkce využívající klasický zápis
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

// * Konstantní funkce využívající šipkovou funkci
const subtract = (a: number, b: number) => {
  const result = a - b;
  return result;
};

function logText(text: string) {
  console.log(`Text: "${text}"`);
}

console.log(`Součet: ${add(1, 24)}`); // * Součet: 25
console.log(`Rozdíl: ${subtract(1, 24)}`); // * Rozdíl: -23
logText("Ahoj světe!");
