abstract class Component {
    abstract Operation(): void;
}

class ConcreteComponent extends Component {
    Operation(): void {
        console.log('具体组件的操作');
    }
}

class Decorator extends Component {
    private component: ConcreteComponent = null!;
    setComponent(comp: ConcreteComponent) {
        this.component = comp;
    }

    Operation(): void {
        console.log(`Leon do Decorator`);
        if (this.component) {
            this.component.Operation();
        }
    }
}

let component1: ConcreteComponent = new ConcreteComponent();
let decorator = new Decorator();
decorator.setComponent(component1);
decorator.Operation();
