import { Bathroom } from "./bathroom.ts";
import { SecondFloor } from "./second_floor.ts";

export class EntryHall {
  //properties
  readonly name: string;

  //constructor
  constructor(name: string) {
    this.name = name;
    console.log(`Užívateľ ${name} vstúpil do vstupnej haly.`);
  }

  //methods
  entryBathroom(): Bathroom {
    console.log(`Užívateľ ${this.name} ide na toaletu`);
    return new Bathroom(this.name);
  }

  askReceptionistAQuestion(question: string): this {
    console.log(`Užívateľ ${this.name} sa pýta otázku: ${question}`);
    console.log("Recepčný mlčí");
    return this;
  }

  //Vytvořte cestu výtahem do druhého patra z EntryHall stejným způsobem, jako v SecondFloor.
  async takeElevatorToSecondFloor(): Promise<SecondFloor> {
    console.log(`Uživatel ${this.name} si volá výtah do druhé patra.`);
    const waitingForElevatorMs = 2000; // Čekání na výtah 2 sekundy
    // Simulace čekání na výtah
    await new Promise((resolve) => setTimeout(resolve, waitingForElevatorMs));
    // Výtah přijíždí
    console.log(`Výtah přijel do vstupnej haly.`);
    console.log(`Výtah dorazil, uživatel ${this.name} nastupuje.`);
    // Jízda výtahem 2 sekundy
    const elevatorRideMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, elevatorRideMs));
    console.log(`Uživatel ${this.name} vystupuje z výtahu ve druhým patre.`);
    return new SecondFloor(this.name);
  }
}
