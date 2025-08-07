import { EntryHall } from "./entry_hall.ts";

export class Bathroom {
  //properties
  readonly name: string;

  //constructor
  constructor(name: string) {
    this.name = name;
    console.log(`Užívateľ ${name} vstúpil na toaletu.`);
  }

  //methods
  returnToEntryHall(): EntryHall {
    console.log(`Užívateľ ${this.name} sa vracia do vstupnej haly.`);
    return new EntryHall(this.name);
  }

  washHands(): this {
    console.log(`Užívateľ ${this.name} si umyl/a ruky.`);
    return this;
  }
}

/* Přidej novou metodu washHands() do bathroom.ts
Metoda vypíše do konzole “Návštěvník Jméno si umyl/a ruce”
Metoda vrátí stávající objekt (this).
Přidej umytí rukou jako krok do visitor.ts */
