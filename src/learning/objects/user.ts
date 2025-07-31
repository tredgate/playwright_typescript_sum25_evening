export class User {
  public username: string;
  password: string;
  age: number;
  email: string;
  isActive = true;
  readonly role: string = "user"; // ? Vlastnost je pouze pro čtení

  constructor(username: string, password: string, age: number, email: string) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.email = email;
    console.log(
      `Vytvořen uživatel: ${this.username} ve věku ${this.age}, aktivován: ${this.isActive}`
    );
  }

  getEmail(): string {
    return this.email;
  }

  getUsername(): string {
    return this.username;
  }

  logUser(): void {
    console.log(
      `Uživatel: ${this.username} ve věku ${this.age}, aktivován: ${this.isActive}`
    );
  }

  setAge(newAge: number): void {
    this.age = newAge;
  }
}
