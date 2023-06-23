type SerializationOptions = {
    formatting?: {
        getIndent?: () => number;
    };
};

type User = {
    name: string;
    email: string;
};

let main = () => {
    let user: User = createUser();
    let serializeUser: string = toSerializeUser(user);
    outputUser(serializeUser);
};
main();

function toSerializeUser(user: User): string {
    let options: SerializationOptions = createOptions();
    return serializeJSONWithOptions(user, options);
}

function createOptions(): SerializationOptions {
    return {
        formatting: {
            getIndent: () => 0,
        },
    };
}

function serializeJSONWithOptions(obj: any, param?: SerializationOptions): string {
    let intent = param?.formatting?.getIndent?.() ?? 2;
    return JSON.stringify(obj, null, intent);
}

function createUser(): User {
    return {
        name: 'Leon Gao',
        email: 'gjd10888@163.com',
    };
}

function outputUser(user: string) {
    console.log(user);
}
