class ENUser {
    username!: string;

    constructor(username: string) {
        // this.username = username;
        this.initialize(username);
    }

    private initialize(username: string) {
        this.username = username;
    }

    setUsername(username: string) {
        this.username = username;
    }
}

let user = new ENUser('leon');
let lowerName = user.username.toLocaleLowerCase();
console.log(lowerName);
