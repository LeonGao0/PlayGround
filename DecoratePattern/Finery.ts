export abstract class Finery {
    abstract show(): void;
}

export class Clothes extends Finery {
    show(): void {
        console.log('衣服');
    }
}
export class Trousers extends Finery {
    show(): void {
        console.log('裤子');
    }
}
export class Shoes extends Finery {
    show(): void {
        console.log('鞋子');
    }
}
