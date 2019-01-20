class HelloWorld extends Freeact.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return Freeact.createElement('div', null, `Oh hai ${this.props.name}`);
  }
}

const helloWorld = Freeact.createElement(HelloWorld, {name: 'woop woop!'}, null);
// const helloWorld2 = Freeact.createElement(Component, null, null);
const helloWorld3 = Freeact.createElement('div', null, 'Yes well here\`s a thing');

const parent = Freeact.createElement('div', null, helloWorld, helloWorld3);

FreeactDOM.render(parent, document.getElementById('root'));
