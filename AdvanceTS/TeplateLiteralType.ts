type Demension = 'block' | 'inline';
type Direction = 'start' | 'end';

type MarginProperty = `margin-${Demension}-${Direction}`;

type MarginUnit = 'px' | 'vh' | 'vw';
type MarginValue = `${number}${MarginUnit}`;

type MarginDeclaration = [MarginProperty, MarginValue];

const margin: MarginDeclaration = ['margin-block-start', '1px'];

function createGetterObject<TObj extends Record<string, any>>(obj: TObj): PropertyGetterOjb<TObj> {
    const newObj: any = {};
    for (let key of Object.keys(obj)) {
        const firstCase = key[0].toUpperCase();
        const leftCase = key.substring(1);
        const getterKey: string = 'get' + firstCase + leftCase;
        newObj[getterKey] = () => obj[key];
    }
    return newObj;
}

type PropertyGetterOjb<TObj> = {
    [TKey in string & keyof TObj as `get${Capitalize<TKey>}`]: () => TObj[TKey];
};

let leon = createGetterObject({
    id: 123,
    name: 'gaojidong',
    foreghName: 'Leon',
});

console.log(leon);
console.log(leon.getName());
leon.getForeghName();
leon.getId();
