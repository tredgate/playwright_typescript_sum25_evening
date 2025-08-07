import { EntryHall } from "./entry_hall.ts";
//import { Bathroom } from "./bathroom";

new EntryHall("Milan Konečný")
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistAQuestion("Kde je prosím Vás toaleta?")
  .entryBathroom()
  .washHands()
  .returnToEntryHall();

async function main() {
  const milan = new EntryHall("Milan Asynchrónny");
  await milan
    .takeElevatorToSecondFloor()
    .then((secondFloor) => secondFloor.lookAround(4));
}

main();

//npx tsx "cesta/k/souboru/visitor.ts"

/* const entryHall = new EntryHall("Milan POM");
const bathroom = new Bathroom("Milan POM");

entryHall.entryBathroom();
bathroom.returnToEntryHall();
entryHall.entryBathroom();
bathroom.returnToEntryHall();
 */

//Kód z této lekce v TS projektu nacommitujte, napushujte a namergujte do main branch (přes PR).
