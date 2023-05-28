export class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    show(): void {
        console.log(`${this.name} show `);
    }
}
